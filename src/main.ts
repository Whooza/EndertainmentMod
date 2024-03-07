import EtnConfig from "core/models/configs/etnConfig";
import { system, world } from "@minecraft/server";
import NetValues from "core/consts/netValues";
import { http } from "@minecraft/server-net";
import EtnGame from "core/etnGame";

let localConfig: EtnConfig | undefined;
let etnGame: EtnGame;

world.afterEvents.worldInitialize.subscribe(async () => {

    const response = await http.get(NetValues.localConfigAdress);
    if (response.status != 200) {
        throw new Error("cant get localConfig");
    }

    localConfig = JSON.parse(response.body);
    if (!localConfig) {
        throw new Error("localConfig undefined");
    }

    etnGame = new EtnGame(localConfig);
    etnGame.initialize();
    system.runInterval(() => etnGame.update(), 1);
});
