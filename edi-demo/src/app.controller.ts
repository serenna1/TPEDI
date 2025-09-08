import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// metodo(post/ usuario) para cada uno de los items
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hola') // cuando estan los @ le decimos al frameworks(nest) que estamos haciendo algo especifico
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('chau')
  getByeBye(): string {
    return this.appService.getBye();
  }

  @Post('usuarios')
  crearUsuario(): string {
    return this.appService.postCrearUsuario();
  }
}
