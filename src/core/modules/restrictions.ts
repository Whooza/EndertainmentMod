import {
    ItemUseBeforeEvent,
    ExplosionBeforeEvent,
    ItemUseOnBeforeEvent,
    PistonActivateBeforeEvent,
    PlayerBreakBlockBeforeEvent,
    PlayerPlaceBlockBeforeEvent,
    ItemDefinitionTriggeredBeforeEvent,
    PlayerInteractWithBlockBeforeEvent,
    PlayerInteractWithEntityBeforeEvent,
    DataDrivenEntityTriggerBeforeEvent,
} from "@minecraft/server";
import ModuleBase from "../models/bases/moduleBase";
import EtnConfig from "../models/configs/etnConfig";

export default class Restrictions extends ModuleBase {

    constructor(config: EtnConfig) {
        super(config, "Restrictions");
    }

    public initialize(): void {

    }
}