import { BadRequestException, Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EventoInicioService } from 'src/services/evento-inicio.service';


@ApiTags('inicio')
@Controller('inicio')
export class InicioController {
  constructor(private readonly inicioService: EventoInicioService) { }


  @Get('/paises')
  async findPaises() {

    const result = await this.inicioService.paisesService();

    if (!result) throw new BadRequestException('Error al cargar paises');

    return JSON.stringify(result);
  }

  @Get('/comunas')
  async findComunas() {

    const result = await this.inicioService.comunasService();

    if (!result) throw new BadRequestException('Error al cargar paises');

    return JSON.stringify(result);
  }

  @Get('/sexoadmin')
  async findSexoAdmin() {

    const result = await this.inicioService.sexoAdminService();

    if (!result) throw new BadRequestException('Error al cargar paises');

    return JSON.stringify(result);
  }
}