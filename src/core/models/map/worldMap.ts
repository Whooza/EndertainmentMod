import { Dimension, world } from "@minecraft/server";
import MapCell from "./worldMapCell";

export default class WorldMap {

    public readonly mapMinXZ: number;
    public readonly mapMaxXZ: number;

    private readonly mapSize: number;
    private readonly mapSpaceSize: number;
    private readonly dimension: Dimension;
    private readonly cells: MapCell[][];

    constructor(mapSize: number, spaceSize: number) {
        this.mapSize = mapSize;
        this.mapSpaceSize = spaceSize;
        this.dimension = world.getDimension("overworld");
        this.mapMinXZ = -spaceSize;
        this.mapMaxXZ = mapSize * spaceSize;

        if (mapSize % 2 != 0) {
            throw new Error("the size of map have to be dividable by two");
        }

        if (spaceSize % 2 != 0) {
            throw new Error("the size of mapSapceSize have to be dividable by two");
        }

        this.cells = new Array(mapSize);
        for (let i = 0; i < this.mapSize; i++) {
            this.cells[i] = new Array<MapCell>();
        }

        this.initialize();
    }

    private initialize(): void {

        let counter = 0;
        for (let x = 0; x < this.mapSize; x++) {
            for (let y = 0; y < this.mapSize; y++) {
                this.cells[x][y] = new MapCell(counter, this.mapSpaceSize, this.dimension, {
                    x: x * this.mapSpaceSize,
                    y: 0,
                    z: y * this.mapSpaceSize
                });
                counter++;
            }
        }
    }

    public getMapCell(indexX: number, indexY: number): MapCell | undefined {
        return this.cells[indexX][indexY];
    }

    public async checkCell(indexX: number, indexY: number): Promise<void> {
        if (indexX > 0 && indexY > 0) {
            await this.cells[indexX][indexY]?.process(indexX, indexY);
        }

        return Promise.resolve();
    }

}
