import { Body, Controller, Post } from "@nestjs/common";
import { SigninDto, SignupDto } from "src/pipeline/dtos/auth-credential.dto";
import { AuthService } from "../services/auth.service";

@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/singup')
    singup(@Body() payload: SignupDto) {
        return this.authService.singup(payload)
    }

    @Post('/signin')
    signin(@Body() payload: SigninDto) {
        return this.authService.singin(payload);
    }
}