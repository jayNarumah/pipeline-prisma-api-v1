import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthController } from "./controllers/auth.controller";
import { JwtStrategy } from "./jwt.strategy";
import { AuthService } from "./services/auth.service";

@Module({
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        JwtStrategy,

    ],
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
        }),
        JwtModule.register({
            secret: 'jay@2019A',
            signOptions: {
                expiresIn: 3600,
            },
        })
    ],
    exports: [JwtStrategy, PassportModule]
})
export class AuthModule {

}