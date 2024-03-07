import GameModeBase from "../models/bases/gameModeBase";
import EtnConfig from "core/models/configs/etnConfig";
import Interactions from "core/modules/interactions";
import GlobalChat from "core/modules/globalChat";
import NameTags from "core/updatables/nameTags";
import AdminMenu from "core/modules/adminMenu";
import Anti32k from "core/updatables/anti32k";

export default class OneBlock extends GameModeBase {

    constructor(config: EtnConfig) {
        super(config, "OneBlock");
    }

    public initialize(): void {
        this.modules.push(new AdminMenu(this.config));
        this.modules.push(new GlobalChat(this.config));
        this.modules.push(new Interactions(this.config));
        this.modules.forEach(x => x.initialize());

        this.updatables.push(new NameTags(this.config));
        this.updatables.push(new Anti32k(this.config));
        this.updatables.forEach(x => x.initialize());
    }

    protected updateLogic(delta: number): Promise<void> {
        return Promise.resolve();
    }
}