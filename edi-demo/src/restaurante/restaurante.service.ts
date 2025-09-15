import { Injectable } from '@nestjs/common';

@Injectable()
export class RestauranteService {
     
restaurantes: any= [];
constructor(){
    let restaurant = {
        "id":"1",
        "name": "Pizzeria Napoli",
        "adress":"calle falsa 123",
        "phone":"23432232"
    };
    this.restaurantes.push(restaurant);
    restaurant = {
        "id": "2",
        "name": "Sushi Tokyo",
        "adress": "Avenida Siempreviva 456",
        "phone": "11223344"
    };
    this.restaurantes.push(restaurant);
    restaurant = {
        "id": "3",
        "name": "Burger House",
        "adress": "Boulevard Central 789",
        "phone": "99887766"
    };
    this.restaurantes.push(restaurant);

    
}    
getLista(){
    
return this.restaurantes;
}

postCrearRestaurant(): string{
    return "Crear un Restaurante:"
}

putActualizarRestaurante() :string{
    return "Actualizar un Restaurante"
}

borrarRestaurante() :string{
    return "Borrar un Restaurante"
}

}
