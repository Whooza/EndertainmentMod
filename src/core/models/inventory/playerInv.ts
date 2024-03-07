import PlayerInvEquip from "./playerInvEquip";
import PlayerInvItem from "./playerInvItem";

export default class PlayerInv {

    public owner: string;
    public items: PlayerInvItem[];
    public equip: PlayerInvEquip[];

    constructor(owner: string, items: PlayerInvItem[], equip: PlayerInvEquip[]) {
        this.owner = owner;
        this.items = items;
        this.equip = equip;
    }

    public static GetEmpty(owner: string): PlayerInv {
        return new PlayerInv(owner, new Array<PlayerInvItem>(), new Array<PlayerInvEquip>());
    }
}
