import IEnchantment from "core/interfaces/iEnchantment";

export default class PlayerInvItemEnchant implements IEnchantment {

    public name: string;
    public level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }
}