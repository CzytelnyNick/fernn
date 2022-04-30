import { AuthService } from './auth.service';
import { Controller, Get, Headers, HttpStatus, Param, Post, Query, Req } from '@nestjs/common';

@Controller('v1/auth')
export class AuthController { 
    constructor(private readonly authService: AuthService) {}
    
    @Get('verify/:apiKey')
    async verifyAPI(
        @Param("apiKey") apiKey: string
    ){
        return JSON.stringify(await this.authService.verifyApi(apiKey))
    }

    @Post('session')
    async createSession( @Param() param: string, @Query() query: string, @Headers() headers: string ){
        return await this.authService.checkAPI(
            this.authService.createSession, 
            { param: param, query: query, headers: headers }, false
        )
    }

    @Post('login/:login')
    async login( @Param() param: string, @Query() query: string, @Headers() headers: string ){
        return await this.authService.checkAPI(
            this.authService.login, 
            { param: param, query: query, headers: headers }
        )
    }
}
