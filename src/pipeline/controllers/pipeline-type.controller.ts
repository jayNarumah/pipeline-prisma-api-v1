import { Body, Controller, Get, Param, Patch, Post, Delete, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { CreatePipelineTypeDto } from "../dtos/pipeline-type.dto";
import { PipelineTypeService } from "../services/pipeline-type.service";

@Controller('/pipeline-type')
// @UseGuards(AuthGuard())
export class PipelineTypeController {
    constructor(private readonly pipelineTypeService: PipelineTypeService) {

    }

    @Get()
    getPipelineTypes() {
        return this.pipelineTypeService.list();
    }

    @Get('/:uid')
    findByUid(@Param('uid') uid: string) {
        return this.pipelineTypeService.findByUid(uid);
    }

    @Post()
    createPipelineType(@Body() payload: CreatePipelineTypeDto) {
        return this.pipelineTypeService.store(payload);
    }
    @Patch('/:uid')
    updatePipelineType(@Param('uid') uid: string, @Body() payload: CreatePipelineTypeDto) {
        return this.pipelineTypeService.update(uid, payload);
    }

    @Delete('/:uid')
    deletePipelineType(@Param('uid') uid: string) {
        return this.pipelineTypeService.delete(uid);
    }
}