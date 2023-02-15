import { IsEmail, IsHexadecimal, IsHexColor, IsNotEmpty, IsPhoneNumber, IsString, MaxLength, minLength, MinLength } from "class-validator";

export class CompanyDto {

    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsString()
    color: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone_number: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(5)
    address: string;
}