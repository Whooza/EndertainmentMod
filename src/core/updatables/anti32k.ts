import UpdatableBase from "../models/bases/updatableBase";
import EtnConfig from "../models/configs/etnConfig";
import * as SRV from "@minecraft/server";

export default class Anti32k extends UpdatableBase {

    constructor(config: EtnConfig) {
        super(config, "Anti32k");
    }

    public initialize(): void {

    }

    protected updateLogic(delta: number): Promise<void> {
        for (const player of SRV.world.getPlayers()) {
            const inventory = player.getComponent(SRV.EntityInventoryComponent.componentId) as SRV.EntityInventoryComponent;
            const { container, inventorySize } = inventory;
            if (container.emptySlotsCount == inventorySize) continue;
            for (let slot = 0; slot < inventorySize; slot++) {
                const item = container.getItem(slot);
                if (!item) continue;
                const enchants = item.getComponent(SRV.ItemEnchantsComponent.componentId) as SRV.ItemEnchantsComponent;
                const enchantments = enchants.enchantments;
                const newEnchants = new SRV.EnchantmentList(enchantments.slot);
                for (let enchant of enchantments) {
                    if (newEnchants.addEnchantment(enchant)) continue;
                    container.setItem(slot);
                    break;
                }
            }
        }
        return Promise.resolve();
    }
}