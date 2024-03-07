import PlayerInvItemEnchant from "../models/inventory/playerInvItemEnchant";
import PlayerPostRequest from "../models/http/requests/playerPostRequest";
import IEnchantment from "core/interfaces/iEnchantment";
import PlayerInvItem from "../models/inventory/playerInvItem";
import PlayerInfo from "../models/http/packages/playerInfo";
import ItemStates from "core/consts/itemStates";
import PlayerInv from "../models/inventory/playerInv";
import ModuleBase from "../models/bases/moduleBase";
import EtnConfig from "../models/configs/etnConfig";
import * as NET from "@minecraft/server-net";
import * as SRV from "@minecraft/server";

export default class Inventory extends ModuleBase {

    constructor(config: EtnConfig) {
        super(config, "Inventory");
    }

    public initialize(): void {
        SRV.world.afterEvents.playerSpawn.subscribe(async event => await this.afterPlayerSpawn(event));
        SRV.world.beforeEvents.playerLeave.subscribe(async event => await this.beforePlayerLeave(event));
    }

    public async afterPlayerSpawn(event: SRV.PlayerSpawnAfterEvent): Promise<void> {

        const inventory = this.getInventoryComp(event.player);
        if (inventory == undefined) {
            return Promise.reject("inventory undefined");
        }

        const equipment = this.getEquipmentComp(event.player);
        if (equipment == undefined) {
            return Promise.reject("equipment undefined");
        }

        const request = new PlayerPostRequest("getitems", new PlayerInfo(this.config.serverName, event.player.name));
        const reply = await NET.http.request(request);
        if (reply.status != 200) {
            return Promise.reject(`request failed - status: '${reply.status}' - body: '${reply.body}'`);
        }

        const inventoryItems: PlayerInv | undefined = JSON.parse(reply.body);
        if (inventoryItems == undefined) {
            return Promise.reject("inventoryItems undefined");
        }

        inventory.container.clearAll();

        // Object.values(EquipmentSlot).forEach(slotName => {
        //     equipment.setEquipment(slotName, undefined);
        // });

        inventoryItems.items.forEach(item => {
            console.log("try to add item");
            if (ItemStates.itemsWithData.includes(item.name)) {
                console.log("items with data");
                try {
                    const newItem = SRV.BlockPermutation.resolve(item.name, this.dataValueToStates(item.name, item.data));
                    const newItemStack = newItem.getItemStack();
                    if (!newItemStack) {
                        return Promise.reject("newItemStack was undefined");
                    }
                    newItemStack.amount = item.amount;
                    this.setEnchants(newItemStack, item.enchants);
                    this.setDamage(newItemStack, item.damage);
                    inventory.container.setItem(item.slot, newItemStack);
                } catch (error) {
                    console.error(error);
                }
            } else {
                console.log("item without data");
                try {
                    const newBook = new SRV.ItemStack(item.name, item.amount);
                    this.setEnchants(newBook, item.enchants);
                    this.setDamage(newBook, item.damage);
                    inventory.container.setItem(item.slot, newBook);
                } catch (error) {
                    console.error(error);
                }
            }
        });

        return Promise.resolve();
    }

    public beforePlayerLeave(event: SRV.PlayerLeaveBeforeEvent): Promise<void> {

        const inventory = this.getInventoryComp(event.player);
        if (inventory == undefined) {
            console.error("inventory undefined");
            return Promise.resolve();
        }

        const equipment = this.getEquipmentComp(event.player);
        if (equipment == undefined) {
            console.error("equipment undefined");
            return Promise.resolve();
        }

        const playerInventory = PlayerInv.GetEmpty(event.player.name);

        // SRV.system.run(() => {
        //     const equip = new Array<PlayerInvEquip>();
        //     Object.values(SRV.EquipmentSlot).forEach(slotName => {
        //         const slot = equipment.getEquipmentSlot(slotName);
        //         const item = slot.getItem();
        //         if (!item) {
        //             equip.push(new PlayerInvEquip(slotName, "", 0, new Array<PlayerInvEquipEnchant>()));
        //         } else {
        //             const durability = this.getDurabilityComp(item);
        //             const damage = durability == undefined ? 0 : durability.damage;
        //             equip.push(new PlayerInvEquip(slotName, item.typeId, damage, new Array<PlayerInvEquipEnchant>()));
        //         }
        //     });
        //     playerInventory.equip = equip;
        // });

        for (let x = 0; x < inventory.inventorySize; x++) {

            const item = inventory.container.getSlot(x).getItem();
            if (!item) {
                playerInventory.items.push(new PlayerInvItem(x, "", 0, 0, 0, new Array<PlayerInvItemEnchant>()));
                continue;
            }

            const durability = this.getDurabilityComp(item);
            const damage = durability == undefined ? 0 : durability.damage;

            switch (item.typeId) {
                case "minecraft:enchanted_book":
                    playerInventory.items.push(new PlayerInvItem(x, item.type.id, 0, item.amount, damage, this.getEnchants(item)));
                    break;
                default:
                    if (item.isStackable) {
                        playerInventory.items.push(new PlayerInvItem(x, item.type.id, this.itemToDataValue(item), item.amount, damage, this.getEnchants(item)));
                    } else {
                        playerInventory.items.push(new PlayerInvItem(x, item.type.id, 0, item.amount, damage, this.getEnchants(item)));
                    }
                    break;
            }
        }

        SRV.system.run(async () => {
            const request = new PlayerPostRequest("setitems", playerInventory);
            await NET.http.request(request);
        });

        return Promise.resolve();
    }

    private getEnchants(item: SRV.ItemStack): IEnchantment[] {
        const enchantComponent = this.getEnchantmentComp(item);
        const invItemEnchants = new Array<PlayerInvItemEnchant>();
        if (!enchantComponent) {
            return invItemEnchants;
        }
        for (const enchantment of enchantComponent.enchantments) {
            invItemEnchants.push(new PlayerInvItemEnchant(enchantment.type.id, enchantment.level));
        }
        return invItemEnchants;
    }

    private setEnchants(item: SRV.ItemStack, enchanments: IEnchantment[]): void {
        if (!enchanments || enchanments && enchanments.length == 0) {
            return;
        }
        const enchantComponent = this.getEnchantmentComp(item);
        if (!enchantComponent) {
            return;
        }
        const newEnchantments = enchantComponent.enchantments;
        for (const invEnchant of enchanments) {
            newEnchantments.addEnchantment(new SRV.Enchantment(invEnchant.name, invEnchant.level));
        }
        enchantComponent.enchantments = newEnchantments;
    }

    private setDamage(item: SRV.ItemStack, damage: number): void {
        const durability = this.getDurabilityComp(item);
        if (!durability) {
            return;
        }
        durability.damage = damage;
    }

    private getInventoryComp(player: SRV.Player): SRV.EntityInventoryComponent | undefined {
        return player.getComponent(SRV.EntityInventoryComponent.componentId) as SRV.EntityInventoryComponent;
    }

    private getEquipmentComp(player: SRV.Player): SRV.EntityEquippableComponent | undefined {
        return player.getComponent(SRV.EntityEquippableComponent.componentId) as SRV.EntityEquippableComponent;
    }

    private getEnchantmentComp(item: SRV.ItemStack): SRV.ItemEnchantsComponent | undefined {
        return item.getComponent(SRV.ItemEnchantsComponent.componentId) as SRV.ItemEnchantsComponent;
    }

    private getDurabilityComp(item: SRV.ItemStack): SRV.ItemDurabilityComponent | undefined {
        return item.getComponent(SRV.ItemDurabilityComponent.componentId) as SRV.ItemDurabilityComponent;
    }

    private itemToDataValue(item: SRV.ItemStack): number {
        if (!ItemStates.itemsWithData.includes(item.typeId)) {
            return 0;
        }
        const dataHolder = ItemStates.dataToStates[item.typeId];
        for (let i = 0; i < dataHolder.length; i++) {
            const itemStackToCompare = this.dataValueToPermutation(item.typeId, i).getItemStack();

            if (itemStackToCompare) {
                if (itemStackToCompare.isStackableWith(item)) {
                    return i;
                }
            }
        }
        return 0;
    }

    private dataValueToPermutation(block: string, data: number): SRV.BlockPermutation {
        if (!block.includes(":")) {
            block = "minecraft:" + block;
        }
        return SRV.BlockPermutation.resolve(block, this.dataValueToStates(block, data));
    }

    private dataValueToStates(block: string, data: number) {
        if (!block.startsWith("minecraft:")) {
            block = "minecraft:" + block;
        }
        if (block in ItemStates.dataToStates) {
            const states = ItemStates.dataToStates[block];
            return states[data >= states.length ? 0 : data];
        }
        return {};
    }
}
