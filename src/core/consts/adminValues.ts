import { ActionFormData } from "@minecraft/server-ui";

export default class AdminValues {

    public static readonly serverItemName = "minecraft:torch";
    public static readonly teleportItemName = "minecraft:soul_torch";
    public static readonly actionItemName = "minecraft:redstone_torch";

    public static readonly servers = new ActionFormData()
        .title("Server")
        .body("Auf einen anderen Server wechseln...")
        .button("Lobby")
        .button("Prison")
        .button("OneBlock")
        .button("CityBuild")
        .button("FreeBuild")
        .button("Farming");

    public static readonly teleports = new ActionFormData()
        .title("Teleport")
        .body("Zu einem Punkt des Servers teleportieren...")
        .button("Spawn");

    public static readonly actions = new ActionFormData()
        .title("Aktionen")
        .body("Verschiedene Funktionen für Admins...")
        .button("Nix ^^");
}