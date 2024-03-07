import IEnchantment from "core/interfaces/iEnchantment";

export default class PlayerInvEquipEnchant implements IEnchantment {

    public name: string;
    public level: number;

    constructor(name: string, level: number) {
        this.name = name;
        this.level = level;
    }
}