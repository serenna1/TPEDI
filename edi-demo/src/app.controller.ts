import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hola')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('chau')
  getByeBye(): string {
    return this.appService.getBye();
  }
}


