import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'swagger se encuantra en http://localhost:3000/api/swagger';
  }
}
