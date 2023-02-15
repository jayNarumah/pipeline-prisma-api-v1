import { Injectable, UnauthorizedException } from "@nestjs/common";
import { SigninDto, SignupDto } from "src/pipeline/dtos/auth-credential.dto";
import { PrismaService } from "src/prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService) { }

    async singup(authCredential: SignupDto) {
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(authCredential.password, salt);
        const user = await this.prisma.user.create({
            data: {
                email: authCredential.email,
                full_name: authCredential.full_name,
                password,
                salt,
            }
        });

        return user;
    }

    async singin(authCredential: SigninDto) {
        const { email, password } = authCredential;
        let user = null;
        let hashPassword = null;

        try {
            user = await this.prisma.user.findFirst({
                where: { email },
            });
            hashPassword = await this.hashPassword(password, user.salt);
        } catch (error) {
            throw new UnauthorizedException();
        }



        if (!user || await !this.comparePassword(hashPassword, user.password)) {
            throw new UnauthorizedException();
        }

        const payload = {
            user: {
                email: email,
                full_name: user.full_name,
                uid: user.uid,
            }
        };

        const token = await this.jwtService.sign(payload);

        return {
            token,
            full_name: user.full_name,
        };
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }

    async comparePassword(reqPassword: string, userPassword) {
        return reqPassword === userPassword;
    }
}