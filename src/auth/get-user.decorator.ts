import { createParamDecorator } from "@nestjs/common";

export const GetUser = createParamDecorator((data, req) => {
    // console.log(req.payload.user)

    const request = req.switchToHttp().getRequest();
    return request.user;
});