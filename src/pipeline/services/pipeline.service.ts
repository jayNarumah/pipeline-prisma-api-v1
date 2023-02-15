import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { connect } from "http2";
import { PipelineResource } from "src/api/resources/pipeline.model";
import { PrismaService } from "src/prisma/prisma.service";
import { PipelineDto } from "../dtos/pipeline.dto";
import { PipelineRouteService } from "./pipeline-route.service";

@Injectable()
export class PipelineService {
    constructor(
        private readonly prisma: PrismaService,
        private readonly pipelineRouteService: PipelineRouteService,
    ) { }

    async list(): Promise<PipelineResource[]> {
        const pipelines = await this.prisma.pipeline.findMany({
            orderBy: { name: 'asc' },
            include: {
                pipelineRoutes: true,
                PipelineType: true,
                Company: true
            }
        });

        return pipelines;
    }

    async findByUid(uid: string): Promise<PipelineResource> {
        const found = await this.prisma.pipeline.findUnique(
            {
                where: { uid },
                include: {
                    PipelineType: true,
                    Company: true,
                    pipelineRoutes: true
                }
            }
        );

        if (!found) {
            throw new NotFoundException(`Pipeline with ID: ${uid} was not found`);
        }

        return found;
    }

    async create(payload: PipelineDto): Promise<PipelineResource> {
        let pipelineRoutes = [];
        payload.lat.forEach((currentValue: any, i: number) => {
            pipelineRoutes.push({
                lat: currentValue,
                lng: payload.lng[i],

            })
        });

        // console.log(pipelineRoutes)
        const pipeline = await this.prisma.pipeline.create({
            data: {
                name: payload.name,
                size: payload.size,
                pipelineTypeId: payload.pipelineTypeId,
                companyId: payload.companyId,
                pipelineRoutes: {
                    createMany: {
                        data: pipelineRoutes,
                        skipDuplicates: true
                    },
                }
            },
            include: {
                pipelineRoutes: true,
                Company: true,
                PipelineType: true
            }
        });

        return pipeline;
    }

    async delete(uid: string): Promise<void> {
        await this.findByUid(uid);
        this.prisma.pipeline.delete({
            where: { uid }
        });
    }

    async update(uid: string, payload: PipelineDto): Promise<PipelineResource> {
        await this.findByUid(uid);

        const pipeline = await this.prisma.pipeline.update({
            where: { uid },
            data: {
                name: payload.name,
                size: payload.size,
            }
        });

        return pipeline;
    }
}