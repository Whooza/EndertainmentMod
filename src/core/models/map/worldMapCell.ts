import {
    BlockPermutation,
    Dimension,
    Direction,
    Vector3,
    Block,
} from "@minecraft/server";
import CellData from "../http/packages/cellData";
import CellInfo from "../http/packages/cellInfo";
import OneBlockRequest from "../http/requests/oneBlockRequest";
import { http } from "@minecraft/server-net";

export default class WorldMapCell {

    public get location(): Vector3 {
        return this.position;
    }

    public get oneBlock(): Block | undefined {
        return this.cellBlock;
    }

    private readonly plotNumber: number;
    private readonly mapSpaceSize: number;
    private readonly position: Vector3;
    private readonly dimension: Dimension;

    private cellBlock: Block | undefined;
    private cellData: CellData | undefined;
    private minX: number;
    private maxX: number;
    private minZ: number;
    private maxZ: number;

    private readonly glowstone: string = "minecraft:glowstone";

    constructor(plotNumber: number, mapSpaceSize: number, dimension: Dimension, position: Vector3) {
        this.plotNumber = plotNumber;
        this.mapSpaceSize = mapSpaceSize;
        this.dimension = dimension;
        this.position = position;
        this.cellBlock = dimension.getBlock(this.position);
        const halfMapSpaceSize = (mapSpaceSize / 2) - 3;
        this.minX = position.x - halfMapSpaceSize;
        this.maxX = position.x + halfMapSpaceSize;
        this.minZ = position.z - halfMapSpaceSize;
        this.maxZ = position.z + halfMapSpaceSize;
    }

    public async process(indexX: number, indexY: number): Promise<void> {
        this.cellBlock = this.dimension.getBlock(this.position);

        const request = new OneBlockRequest("getcelldata", new CellInfo(indexX * 128, indexY * 128));
        const reply = await http.request(request);

        this.cellData = JSON.parse(reply.body);

        if (this.cellBlock && this.cellBlock.isValid() && this.cellBlock.isAir) {
            this.cellBlock.setPermutation(BlockPermutation.resolve(this.glowstone));
        }

        return Promise.resolve();
    }

    public canPlayerBreakBlock(position: Vector3): boolean {
        return position.x > this.minX &&
            position.z > this.minZ &&
            position.x < this.maxX &&
            position.z < this.maxZ;
    }

    public canPlayerPlaceBlock(position: Vector3, face: Direction): boolean {

        switch (face) {
            case Direction.East:
                position.x += 1;
                break;
            case Direction.West:
                position.x -= 1;
                break;
            case Direction.North:
                position.z -= 1;
                break;
            case Direction.South:
                position.z += 1;
                break;
            case Direction.Down:
            case Direction.Up:
            default:
                break;
        }

        return this.canPlayerBreakBlock(position);
    }

    public getPlotNameString(): string {
        return `Plot No. ${this.plotNumber}`;
    }

    public getPlotSizeString(): string {
        return `Size ${this.mapSpaceSize}x${this.mapSpaceSize}`;
    }

}
