import { BadRequestException } from "@nestjs/common";
import { PipelineRouteResource } from "src/api/resources/pipeline-route.model";
import { PrismaService } from "src/prisma/prisma.service";
import { PipelineRouteDto } from "../dtos/pipeline-route.dto";

export class PipelineRouteService {
    constructor(private readonly prisma: PrismaService) { }

    // async createManyRoutes(payload: PipelineRouteDto[]): Promise<void> {
    // const pipelineRoutes = await this.prisma.pipelineRoute.createMany({
    //     data: payload,
    //     skipDuplicates: false,
    // });

    //     if (!pipelineRoutes) {
    //         throw new BadRequestException();
    //     }

    //     return;
    // }
}