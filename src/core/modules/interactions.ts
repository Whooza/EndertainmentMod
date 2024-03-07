import ModuleBase from "../models/bases/moduleBase";
import EtnConfig from "../models/configs/etnConfig";
import * as SRV from "@minecraft/server";

export default class Interactions extends ModuleBase {

    constructor(config: EtnConfig) {
        super(config, "Interactions");
    }

    public initialize(): void {
        SRV.world.beforeEvents.playerInteractWithBlock.subscribe(x => this.beforeInteractWithBlock(x));
        SRV.world.beforeEvents.playerInteractWithEntity.subscribe(x => this.beforeInteractWithEntity(x));
    }

    private beforeInteractWithBlock(event: SRV.PlayerInteractWithBlockBeforeEvent): void {

    }

    private beforeInteractWithEntity(event: SRV.PlayerInteractWithEntityBeforeEvent): void {

    }
}
