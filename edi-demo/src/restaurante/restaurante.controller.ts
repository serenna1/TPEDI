import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';


@Controller('restaurante')
export class RestauranteController {
constructor(private readonly restauranteService: RestauranteService) {}

@Get('lista')
getRestaurant(){
    return this.restauranteService.getLista();
}

@Post('crear')
postCrearRestaurante(): string{
    return this.restauranteService.postCrearRestaurant();
}

@Put('actualizar')
putActulizaRestaurante(): string{
    return this.restauranteService.putActualizarRestaurante();
}

@Delete('borrar')
deleteRestaurante(): string{
    return this.restauranteService.borrarRestaurante();

}


}
