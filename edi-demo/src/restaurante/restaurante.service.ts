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
        "name": "Sushi",
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
    getRestaurants(){
    
        return this.restaurantes;
    }
    
    getRestaurantById(id:Number) {
        //console.log(id); probando
        for ( const variable of this.restaurantes) {
            if (variable.id === id) {
                return variable;
            }
        }
        return "REstaurante no encontrado";
    }

    getNameRestaurante(name:String) {
        console.log(name);
        for ( const variable of this.restaurantes) {
            if (variable.name === name) {
                return variable;
            }
        }
        return "Nombre no encontrado";
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

borrarRestaurante(id: Number) :string{
    const index = this.restaurantes.findIndex(n => n.id === id);
    if(index === -1){
        return "Su restaurante no se encuentra";
    }
    this.restaurantes.splice(index,1);
    return "Borrar un Restaurante"
}

}
