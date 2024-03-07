import { HttpRequest, HttpRequestMethod } from "@minecraft/server-net";
import NetValues from "core/consts/netValues";

export default class OneBlockRequest extends HttpRequest {

    constructor(path: string, data: any) {
        super(NetValues.oneBlockAddress + path)
        this.method = HttpRequestMethod.Post;
        this.headers = NetValues.headerValues;
        this.body = JSON.stringify(data);
    }
}