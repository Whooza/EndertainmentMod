import { MinecraftDimensionTypes, world } from "@minecraft/server";

export class Dimensions {
    public static readonly overworld = world.getDimension(MinecraftDimensionTypes.overworld);
    public static readonly nether = world.getDimension(MinecraftDimensionTypes.nether);
    public static readonly theEnd = world.getDimension(MinecraftDimensionTypes.theEnd);
}