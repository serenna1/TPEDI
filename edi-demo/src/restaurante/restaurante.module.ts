import { Module } from '@nestjs/common';
import { AppController } from 'src/app.controller';
import { RestauranteController } from './restaurante.controller';
import { AppService } from 'src/app.service';
import { RestauranteService } from './restaurante.service';

@Module({
    imports: [RestauranteModule],
    controllers: [AppController, RestauranteController], 
    providers: [AppService, RestauranteService],

})
export class RestauranteModule {
  
}
