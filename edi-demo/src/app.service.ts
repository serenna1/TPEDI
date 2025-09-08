import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola chicos';
  }
   
  //agregado
  getBye(): string {
    return 'Bye chicos';
  }
}





