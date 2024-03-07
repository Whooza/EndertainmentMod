import ChatPostRequest from "../models/http/requests/chatPostRequest";
import ChatMessage from "../models/http/packages/chatMessage";
import ModuleBase from "../models/bases/moduleBase";
import EtnConfig from "../models/configs/etnConfig";
import * as NET from "@minecraft/server-net";
import * as SRV from "@minecraft/server";

export default class GlobalChat extends ModuleBase {

    constructor(config: EtnConfig) {
        super(config, "GlobalChat");
    }

    public initialize(): void {
        SRV.world.beforeEvents.chatSend.subscribe(event => this.beforeChatSend(event));
    }

    public beforeChatSend(event: SRV.ChatSendBeforeEvent): void {
        event.cancel = true;
        SRV.system.run(async () => {
            const request = new ChatPostRequest("new_chat_msg", new ChatMessage(event.sender.name, this.config.serverName, event.message));
            await NET.http.request(request);
        });
    }
}
