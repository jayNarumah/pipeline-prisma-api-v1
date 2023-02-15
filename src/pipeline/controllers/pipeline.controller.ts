import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { PipelineDto } from "../dtos/pipeline.dto";
import { PipelineService } from "../services/pipeline.service";

@Controller('/pipeline')
// @UseGuards(AuthGuard())
export class PipelineController {
    constructor(private pipelineService: PipelineService) { }

    @Get()
    getPipelines() {
        return this.pipelineService.list();
    }

    @Get('/:uid')
    getByUid(@Param('uid') uid: string) {
        return this.pipelineService.findByUid(uid);
    }

    @Post()
    create(@Body() payload: PipelineDto) {

        return this.pipelineService.create(payload);
    }

    @Patch('/:uid')
    update(@Param('uid') uid: string, @Body() payload: PipelineDto) {
        return this.pipelineService.update(uid, payload);
    }

    @Delete('/:uid')
    delete(@Param('uid') uid: string) {
        return this.pipelineService.delete(uid);
    }

}