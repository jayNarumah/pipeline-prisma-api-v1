import { IsNotEmpty, MinLength } from "class-validator";

export class CreatePipelineTypeDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;
}