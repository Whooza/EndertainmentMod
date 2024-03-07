import PlayerInvEquipEnchant from "./playerInvEquipEnchant";

export default class PlayerInvEquip {

    public slot: string;
    public item: string;
    public damage: number;
    public enchants: PlayerInvEquipEnchant[];

    constructor(slot: string, item: string, damage: number, enchants: PlayerInvEquipEnchant[]) {
        this.slot = slot;
        this.item = item;
        this.damage = damage;
        this.enchants = enchants;
    }
}
