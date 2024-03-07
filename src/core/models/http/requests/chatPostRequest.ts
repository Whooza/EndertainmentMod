import { HttpRequest, HttpRequestMethod } from "@minecraft/server-net";
import NetValues from "core/consts/netValues";

export default class ChatPostRequest extends HttpRequest {

    constructor(path: string, data: any) {
        super(NetValues.chatAddress + path)
        this.method = HttpRequestMethod.Post;
        this.headers = NetValues.headerValues;
        this.body = JSON.stringify(data);
    }
}