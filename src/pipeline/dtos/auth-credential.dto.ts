import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignupDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    full_name: string;

    @IsNotEmpty()
    password: string;
}

export class SigninDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}