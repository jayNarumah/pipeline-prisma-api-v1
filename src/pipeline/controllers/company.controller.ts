import { Controller, Get, Param, Post, Body, Patch, Delete, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { GetUser } from "src/auth/get-user.decorator";
import { CompanyDto } from "../dtos/company.dto";
import { CompanyService } from "../services/company.service";

@Controller('/company')
// @UseGuards(AuthGuard())
export class CompanyController {
    constructor(private readonly companyService: CompanyService) {
    }

    @Get()
    getCompanies() {
        return this.companyService.list();
    }

    @Get('/:uid')
    findByUid(@Param('uid') uid: string) {
        return this.companyService.findByUid(uid);
    }

    @Post()
    createCompany(@Body() payload: CompanyDto, @GetUser() is) {
        return this.companyService.store(payload);
    }

    @Patch('/:uid')
    updateCompany(@Param('uid') uid: string, @Body() payload: CompanyDto) {
        return this.companyService.update(uid, payload);
    }

    @Delete('/:uid')
    deleteCompany(@Param('uid') uid: string) {
        return this.companyService.delete(uid);
    }
}