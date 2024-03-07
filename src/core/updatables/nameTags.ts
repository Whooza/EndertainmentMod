import UpdatableBase from "../models/bases/updatableBase";
import { Dimensions } from "core/consts/dimensions";
import EtnConfig from "../models/configs/etnConfig";

export default class NameTags extends UpdatableBase {

    constructor(config: EtnConfig) {
        super(config, "NameTags");
    }

    public initialize(): void {

    }

    protected updateLogic(delta: number): Promise<void> {
        return new Promise((resolve, _) => {
            const players = Dimensions.overworld.getPlayers();
            players.forEach(player => player.nameTag = `§g[ETN]: §f${player.name} §g[0]`);
            resolve();
        });
    }
}