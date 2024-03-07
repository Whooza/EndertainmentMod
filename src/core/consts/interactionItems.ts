import { GamemodeType } from "core/enums/gamemodeType";

export default class InteractionItems {

    public static readonly values = new Map<string, GamemodeType>([
        ["", GamemodeType.Lobby],
        ["", GamemodeType.Farming],
        ["", GamemodeType.OneBlock],
        ["", GamemodeType.CityBuild],
        ["", GamemodeType.FreeBuild]
    ]);
}
