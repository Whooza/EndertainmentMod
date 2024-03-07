import { BlockPermutation } from "@minecraft/server";
import UpdatableBase from "../models/bases/updatableBase";
import EtnConfig from "../models/configs/etnConfig";

export default class AntiNuker extends UpdatableBase {

    private log: Map<string, number> = new Map();
    private blockLog: Map<string, BlockPermutation> = new Map();

    constructor(config: EtnConfig) {
        super(config, "AntiNuker");
    }

    public initialize(): void {
        // world.afterEvents.playerBreakBlock.subscribe(({ block, brokenBlockPermutation, dimension, player }) => {
        //     const old = log.get(player.name)
        //     log.set(player.name, { time: Date.now(), amount: old?.amount ?? 0 })
        //     if (!old) return
        //     if ((old.time ?? Date.now()) < (Date.now() - 50)) return blockLog.set(player.name, { location: block.location, permutation: brokenBlockPermutation })
        //     if (blockLog.has(player.name) && log.get(player.name).amount === 0) {
        //         dimension.getBlock(blockLog.get(player.name).location).setPermutation(blockLog.get(player.name).permutation)
        //         setTickTimeout(() => {
        //             dimension.getEntitiesAtBlockLocation(blockLog.get(player.name)?.location ?? block.location)?.filter((entity) => entity.typeId === "minecraft:item")?.forEach((item) => item.kill())
        //             blockLog.delete(player.name)
        //         }, 0)
        //     }
        //     dimension.getBlock(block.location).setPermutation(brokenBlockPermutation)
        //     setTickTimeout(() => {
        //         dimension.getEntitiesAtBlockLocation(block.location)?.filter((entity) => entity.typeId === "minecraft:item").forEach((item) => item.kill())
        //     }, 0)
        //     log.set(player.name, { time: Date.now(), amount: ++old.amount })
        // })

        // world.afterEvents.playerLeave.subscribe((data) => (log.delete(data.playerName)) && (blockLog.delete(data.playerName)))
    }

    protected updateLogic(delta: number): Promise<void> {
        // [...log.keys()]?.forEach(pN => {
        //     if (log.get(pN).amount > 5) {
        //         const player = [...world.getPlayers()].find(pL => pL.name === pN)
        //         player.runCommandAsync(`say NUKER`)
        //     }
        //     log.set(pN, Object.assign(log.get(pN), { amount: 0 }))
        // })
        return Promise.resolve();
    }
}