import { Injectable, BadRequestException, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePipelineTypeDto } from "../dtos/pipeline-type.dto";
import { PipelineTypeResource } from "../../api/resources/pipeline-type.model";

@Injectable()
export class PipelineTypeService {
    constructor(private prisma: PrismaService) { }

    async list(): Promise<PipelineTypeResource[]> {
        const pipelineTypes = await this.prisma.pipelineType.findMany({
            orderBy: { name: 'asc' }
        });

        if (!pipelineTypes) {
            throw new NotFoundException('Pipeline Types Not Found Exception!!!');
        }
        return pipelineTypes;
    }

    async store(data: CreatePipelineTypeDto) {
        const pipelineType = await this.prisma.pipelineType.create({ data });
        if (!pipelineType) {
            throw new BadRequestException();
        }

        return pipelineType;
    }

    async update(uid: string, payload: CreatePipelineTypeDto): Promise<PipelineTypeResource> {
        const pipelineType = await this.prisma.pipelineType.findUnique({
            where: { uid: uid }
        })

        if (!pipelineType) {
            throw new NotFoundException();
        }
        const pType = await this.prisma.pipelineType.update({
            where: { uid: uid },
            data: {
                name: payload.name,
            }
        });

        return pType;
    }

    async findByUid(uid: string): Promise<PipelineTypeResource> {
        const found = this.prisma.pipelineType.findUnique({
            where: { uid }
        });

        if (!found) {
            throw new NotFoundException(`Pipeline Type with ID ${uid} was not found`);
        }

        return found;
    }

    async delete(uid: string) {
        const pipelineType = await this.findByUid(uid);

        if (!pipelineType) {
            throw new NotFoundException();
        }

        const found = this.prisma.pipelineType.delete({
            where: { uid }
        });

        return uid;
    }

}