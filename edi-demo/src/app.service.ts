import { Injectable } from '@nestjs/common';
// aca esta la logica del negocio
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola chicos';
  }

  //agregado
  getBye(): string {
    return 'Bye chicos';
  }

  postCrearUsuario(): string {
    return 'creando un usuario';
  }
}
