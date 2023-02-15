import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { CompanyController } from "./controllers/company.controller";
import { PipelineTypeController } from "./controllers/pipeline-type.controller";
import { PipelineController } from "./controllers/pipeline.controller";
import { StatisticController } from "./controllers/statistic.controller";
import { CompanyService } from "./services/company.service";
import { PipelineRouteService } from "./services/pipeline-route.service";
import { PipelineTypeService } from "./services/pipeline-type.service";
import { PipelineService } from "./services/pipeline.service";
import { StatisticService } from "./services/statistic.service";

@Module({
    // imports: [PrismaModule],
    controllers: [
        PipelineTypeController,
        CompanyController,
        PipelineController,
        StatisticController,
    ],
    providers: [
        PipelineTypeService,
        PipelineRouteService,
        CompanyService,
        PipelineService,
        StatisticService,
    ],
    imports: [AuthModule]
})

export class PipelineModule { }