import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestauranteController } from './restaurante/restaurante.controller';
import { RestauranteService } from './restaurante/restaurante.service';
import { RestauranteModule } from './restaurante/restaurante.module';
// esto le dice a nest de donde sacar todo los puntos de acceso
@Module({
  imports: [RestauranteModule],
  controllers: [AppController, RestauranteController], // todos los controladores van aca
  providers: [AppService, RestauranteService], // todos los servicios van aca
})
export class AppModule {}
//si se crean bien las cosas este archivo no se deberia de tocar
