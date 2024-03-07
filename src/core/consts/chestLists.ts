import ChestItem from "core/models/chestItem";

export default class ChestLists {

    public static readonly chest50Items = new Array<ChestItem>(
        new ChestItem("minecraft:water_bucket", null, 1),
        new ChestItem("minecraft:wheat_seeds", null, 6),
        new ChestItem("minecraft:beetroot_seeds", null, 2),
        new ChestItem("minecraft:apple", null, 1),
        new ChestItem("minecraft:bone_meal", null, 4),
        new ChestItem("minecraft:sapling", null, 2),
        new ChestItem("minecraft:sapling", 2, 2),
        new ChestItem("minecraft:villager_spawn_egg", null, 2)
    );
    public static readonly chest250Items = new Array<ChestItem>(
        new ChestItem("minecraft:lava_bucket", null, 1),
        new ChestItem("minecraft:bone", null, 8),
        new ChestItem("minecraft:water_bucket", null, 1),
        new ChestItem("minecraft:bread", null, 6),
        new ChestItem("minecraft:carrot", null, 12),
        new ChestItem("minecraft:potato", null, 12),
        new ChestItem("minecraft:sapling", 1, 2)
    );
    public static readonly chest500Items = new Array<ChestItem>(
        new ChestItem("minecraft:bamboo", null, 6),
        new ChestItem("minecraft:water_bucket", null, 1),
        new ChestItem("minecraft:lava_bucket", null, 1),
        new ChestItem("minecraft:cactus", null, 3),
        new ChestItem("minecraft:honeycomb", null, 6),
        new ChestItem("minecraft:name_tag", null, 4),
        new ChestItem("minecraft:saddle", null, 1),
        new ChestItem("minecraft:sapling", 3, 2),
        new ChestItem("minecraft:villager_spawn_egg", null, 2)
    );
    public static readonly chest1200Items = new Array<ChestItem>(
        new ChestItem("minecraft:cookie", null, 5),
        new ChestItem("minecraft:cod_bucket", null, 1),
        new ChestItem("minecraft:golden_apple", null, 3),
        new ChestItem("minecraft:kelp", null, 6),
        new ChestItem("minecraft:lava_bucket", null, 1),
        new ChestItem("minecraft:salmon_bucket", null, 1),
        new ChestItem("minecraft:sapling", 4, 2)
    );
    public static readonly chest2400Items = new Array<ChestItem>(
        new ChestItem("minecraft:brown_mushroom", null, 3),
        new ChestItem("minecraft:water_bucket", null, 1),
        new ChestItem("minecraft:golden_carrot", null, 3),
        new ChestItem("minecraft:nautilus_shell", null, 2),
        new ChestItem("minecraft:sapling", 5, 2),
        new ChestItem("minecraft:sea_pickle", null, 5),
        new ChestItem("minecraft:prismarine_shard", null, 4),
        new ChestItem("minecraft:villager_spawn_egg", null, 2)
    );
    public static readonly chest3000Items = new Array<ChestItem>(
        new ChestItem("minecraft:cake", null, 3),
        new ChestItem("minecraft:water_bucket", null, 1),
        new ChestItem("minecraft:diamond", null, 4),
        new ChestItem("minecraft:emerald_block", null, 1),
        new ChestItem("minecraft:potion", 21, 2),
        new ChestItem("minecraft:red_mushroom", null, 3),
        new ChestItem("minecraft:lava_bucket", null, 1)
    );
    public static readonly chest3600Items = new Array<ChestItem>(
        new ChestItem("minecraft:crimson_fungus", null, 3),
        new ChestItem("minecraft:magma_cream", null, 4),
        new ChestItem("minecraft:nether_wart", null, 2),
        new ChestItem("minecraft:potion", 28, 2),
        new ChestItem("minecraft:pufferfish_bucket", null, 1),
        new ChestItem("minecraft:villager_spawn_egg", null, 2)
    );
    public static readonly chest4700Items = new Array<ChestItem>(
        new ChestItem("minecraft:blaze_rod", null, 5),
        new ChestItem("minecraft:glistering_melon_slice", null, 2),
        new ChestItem("minecraft:potion", 12, 2),
        new ChestItem("minecraft:pumpkin_pie", null, 4),
        new ChestItem("minecraft:tropical_fish_bucket", null, 1)
    );
    public static readonly chest5300Items = new Array<ChestItem>(
        new ChestItem("minecraft:enchanted_golden_apple", null, 2),
        new ChestItem("minecraft:slime_ball", null, 8),
        new ChestItem("minecraft:lava_bucket", null, 1),
        new ChestItem("minecraft:warped_fungus", null, 3),
        new ChestItem("minecraft:villager_spawn_egg", null, 2)
    );
    public static readonly chest6200Items = new Array<ChestItem>(
        new ChestItem("minecraft:ender_eye", null, 3),
        new ChestItem("minecraft:slime", null, 2),
        new ChestItem("minecraft:diamond", null, 4),
        new ChestItem("minecraft:golden_apple", null, 3),
        new ChestItem("minecraft:glistering_melon_slice", null, 2)
    );
    public static readonly chest6300Items = new Array<ChestItem>(
        new ChestItem("minecraft:totem_of_undying", null, 1),
        new ChestItem("minecraft:lava_bucket", null, 1),
        new ChestItem("minecraft:shulker_box", 1, 1),
        new ChestItem("minecraft:shulker_box", 15, 1)
    );

}
