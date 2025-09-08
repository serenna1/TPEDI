import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// esto le dice a nest de donde sacar todo los puntos de acceso
@Module({
  imports: [],
  controllers: [AppController], // todos los controladores van aca
  providers: [AppService], // todos los servicios van aca
})
export class AppModule {}
//si se crean bien las cosas este archivo no se deberia de tocar
