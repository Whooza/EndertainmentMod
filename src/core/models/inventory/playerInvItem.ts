import PlayerInvItemEnchant from "./playerInvItemEnchant";

export default class PlayerInvItem {

    public slot: number;
    public name: string;
    public data: number;
    public amount: number;
    public damage: number;
    public enchants: PlayerInvItemEnchant[];

    constructor(slot: number, name: string, data: number, amount: number, damage: number, enchants: PlayerInvItemEnchant[]) {
        this.slot = slot;
        this.name = name;
        this.data = data;
        this.amount = amount;
        this.damage = damage;
        this.enchants = enchants;
    }
}
