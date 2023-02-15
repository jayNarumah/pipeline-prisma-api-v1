import { IsArray, IsNotEmpty, Max, Min } from "class-validator";

export class PipelineRouteDto {
    @IsNotEmpty()
    @Min(-180)
    @Max(180)
    @IsArray()
    lat: number[];

    @IsNotEmpty()
    @Min(-180)
    @Max(180)
    @IsArray()
    lng: number[];

    @IsNotEmpty()
    pipelineId: number[];
}