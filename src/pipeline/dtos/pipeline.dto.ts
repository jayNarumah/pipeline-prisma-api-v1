import { IsEmail, IsNotEmpty, IsOptional, MinLength } from "class-validator";

export class PipelineDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsNotEmpty()
    size: number;

    @IsNotEmpty()
    pipelineTypeId: number;

    @IsNotEmpty()
    companyId: number;

    @IsNotEmpty()
    lat: string[];

    @IsNotEmpty()
    lng: string[]
}