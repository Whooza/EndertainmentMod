export default class ChestItem {
    public itemNameTag: string;
    public itemVariant: number | null;
    public itemAmount: number;

    constructor(itemNameTag: string, itemVariant: number | null, itemAmount: number) {
        this.itemNameTag = itemNameTag;
        this.itemVariant = itemVariant;
        this.itemAmount = itemAmount;
    }
}
