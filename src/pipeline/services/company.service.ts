import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CompanyResource } from "src/api/resources/company.model";
import { PrismaService } from "src/prisma/prisma.service";
import { CompanyDto } from "../dtos/company.dto";

@Injectable()
export class CompanyService {
    constructor(private prisma: PrismaService) { }

    async list(): Promise<CompanyResource[]> {
        const companies = await this.prisma.company.findMany();
        return companies;
    }

    async findByUid(uid: string): Promise<CompanyResource> {
        const found = await this.prisma.company.findUnique({
            where: { uid: uid }
        });

        if (!found) {
            throw new NotFoundException(`Company with Id ${uid} not found`);
        }

        return found;
    }

    async store(data: CompanyDto) {
        const company = this.prisma.company.create({ data });

        if (!company) {
            throw new BadRequestException(`Can not create the company`);
        }

        return company;
    }

    async update(uid: string, payload: CompanyDto): Promise<CompanyResource> {
        const found = await this.findByUid(uid);

        const company = await this.prisma.company.update({
            where: { uid },
            data: {
                name: payload.name,
                email: payload.email,
                phone_number: payload.phone_number,
                address: payload.address,
            }
        });

        return company;
    }

    async delete(uid: string): Promise<void> {
        const found = await this.findByUid(uid);

        if (!found) {
            throw new NotFoundException(`Company with ${uid} not found`);
        }

        await this.prisma.company.delete({
            where: { uid }
        });
    }
}