import AdminPostRequest from "../models/http/requests/adminPostRequest";
import TransferInfo from "../models/http/packages/transferInfo";
import TeleportInfo from "../models/http/packages/teleportInfo";
import AdminValues from "core/consts/adminValues";
import ModuleBase from "../models/bases/moduleBase";
import EtnConfig from "../models/configs/etnConfig";
import * as NET from "@minecraft/server-net";
import * as SRV from "@minecraft/server";

export default class AdminMenu extends ModuleBase {

    constructor(config: EtnConfig) {
        super(config, "AdminMenu");
    }

    public initialize(): void {
        SRV.world.afterEvents.itemUse.subscribe(async event => await this.itemUseAfterEvent(event));
    }

    public async itemUseAfterEvent(event: SRV.ItemUseAfterEvent): Promise<void> {

        switch (event.itemStack.typeId) {
            case AdminValues.serverItemName:
                return await this.serverTask(event);
            case AdminValues.teleportItemName:
                return await this.teleportTask(event);
            case AdminValues.actionItemName:
                return await this.actionTask(event);
            default:
                return Promise.resolve();
        }
    }

    private async serverTask(event: SRV.ItemUseAfterEvent): Promise<void> {

        const formResult = await AdminValues.servers.show(event.source);

        if (formResult.canceled) {
            return Promise.reject("user canceled menu");
        }

        switch (formResult.selection) {
            case 0:
                return await this.processServerTask(event, "lobby");
            case 1:
                return await this.processServerTask(event, "prison");
            case 2:
                return await this.processServerTask(event, "farming");
            case 3:
                return await this.processServerTask(event, "oneblock");
            case 4:
                return await this.processServerTask(event, "citybuild");
            case 5:
                return await this.processServerTask(event, "freeBuild");
            default:
                return Promise.resolve();
        }
    }

    private async processServerTask(event: SRV.ItemUseAfterEvent, serverName: string): Promise<void> {
        const serverInfo = this.config.serverAddresses.get(serverName);
        if (serverInfo) {
            const request = new AdminPostRequest("tranfer", new TransferInfo(event.source.name, this.config.serverName, serverInfo.address, serverInfo.port));
            const response = await NET.http.request(request);
            if (!response || response && response.status == 200) {
                event.source.sendMessage("interner fehler");
            }
        }
    }

    private async actionTask(event: SRV.ItemUseAfterEvent): Promise<void> {

        const formResult = await AdminValues.actions.show(event.source);

        if (formResult.canceled) {
            return Promise.reject("user canceled menu");
        }

        switch (formResult.selection) {
            case 0:
                return Promise.resolve();
            default:
                return Promise.resolve();
        }
    }

    private async teleportTask(event: SRV.ItemUseAfterEvent): Promise<void> {

        const formResult = await AdminValues.teleports.show(event.source);

        if (formResult.canceled) {
            return Promise.resolve();
        }

        switch (formResult.selection) {
            case 0:
                await this.processTeleportTask(event, "spawn");
                break;
            default:
                return;
        }
    }

    private async processTeleportTask(event: SRV.ItemUseAfterEvent, teleportName: string): Promise<void> {
        const request = new AdminPostRequest("teleport", new TeleportInfo(this.config.serverName, event.source.name, teleportName));
        const response = await NET.http.request(request);
        if (!response || response && response.status == 200) {
            event.source.sendMessage("interner fehler");
        }
    }
}
