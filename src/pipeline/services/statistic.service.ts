import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class StatisticService {
    constructor(private readonly prisma: PrismaService) { }

    async getPipelineCount() {
        const count = await this.prisma.pipeline.count();

        return count;
    }

    async getPipelineTypeCount() {
        const count = await this.prisma.pipelineType.count();

        return count;
    }

    async getCompaniesCount() {
        const count = await this.prisma.company.count();

        return count;
    }
}