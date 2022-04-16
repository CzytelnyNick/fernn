// import { Controller } from '@nestjs/common';

// @Controller('auth')
// export class AuthController {}



import { AuthService } from './auth.service';
import { Controller, Get, HttpStatus, Param, Post, Query } from '@nestjs/common';

@Controller('v1/auth')
export class AuthController { 
    constructor(private readonly authService: AuthService) {}
    
    @Post('create/session')
    async createSession(){
        return JSON.stringify(await this.authService.createSession())
    }

    // @Get(':sessionID/login/:login')
    // async getHello(
    //     @Param("sessionID") sessionID, 
    //     @Param("login") login, 
    //     @Query("password") aa,  
    //     @Res() res
    // ) {
    //     return res.status(HttpStatus.OK).json(this.authService.login(aa, login, sessionID))
    // }
}
