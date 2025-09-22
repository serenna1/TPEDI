import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { RestauranteService } from './restaurante.service';


@Controller('restaurante')
export class RestauranteController {
constructor(private readonly restauranteService: RestauranteService) {}

@Get('lista')
getRestaurant(){
    return this.restauranteService.getLista();
}

@Get(':id')
getBuscarId(@Param('id') idRestaurant:Number) {
    return this.restauranteService.getRestaurantById(idRestaurant);
}
@Get('/name/:name')
getbuscarName(@Param('name')NameRestaurant:String){
    return this.restauranteService.getNameRestaurante(NameRestaurant);

}

@Post('crear')
postCrearRestaurante(): string{
    return this.restauranteService.postCrearRestaurant();
}

@Put('actualizar')
putActulizaRestaurante(): string{
    return this.restauranteService.putActualizarRestaurante();
}

@Delete('borrar/:id')
deleteRestaurante(@Param('id') idRestaurant:Number): string{
    return this.restauranteService.borrarRestaurante(idRestaurant);

}



}
