import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { StatisticService } from "../services/statistic.service";

@Controller('/statistic')
@UseGuards(AuthGuard())
export class StatisticController {
    constructor(private readonly statisticService: StatisticService) { }

    @Get('/pipelines')
    getPipelinesCount() {
        return this.statisticService.getPipelineCount();
    }

    @Get('/pipeline-types')
    getPipelineTypeCount() {
        return this.statisticService.getPipelineTypeCount();
    }

    @Get('/companies')
    getCompanyCount() {
        return this.statisticService.getCompaniesCount();
    }
}