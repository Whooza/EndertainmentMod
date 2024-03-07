import { HttpHeader } from "@minecraft/server-net";

export default class NetValues {

    public static readonly chatAddress: string = "http://teamhub/api/chat/";
    public static readonly adminAddress: string = "http://teamhub/api/admin/";
    public static readonly playerAddress: string = "http://teamhub/api/player/";
    public static readonly oneBlockAddress: string = "http://teamhub/api/oneblock/";

    public static readonly localConfigAdress: string = "http://localhost/getconfig";

    public static readonly headerValues: HttpHeader[] = new Array<HttpHeader>(
        new HttpHeader("Content-Type", "application/json"),
        new HttpHeader("Accept", "application/json")
    );
}