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

    if (!result) throw new BadRequestException('Error al cargar comunas');

    return JSON.stringify(result);
  }

  @Get('/sexoadmin')
  async findSexoAdmin() {

    const result = await this.inicioService.sexoAdminService();

    if (!result) throw new BadRequestException('Error al cargar sexo administrativo');

    return JSON.stringify(result);
  }

  @Get('/razonDerivacion')
  async findRazonDerivacion() {

    const result = await this.inicioService.razonDerivacionservice();

    if (!result) throw new BadRequestException('Error al cargar razones de derivacion');

    return JSON.stringify(result);
  }

  @Get('/especialidades')
  async findEspecialidades() {

    const result = await this.inicioService.especialidadesService();

    if (!result) throw new BadRequestException('Error al cargar especialdiades');

    return JSON.stringify(result);
  }

  @Get('/diagnosticos')
  async findDiagnosticos() {

    const result = await this.inicioService.diagnosticoService();

    if (!result) throw new BadRequestException('Error al cargar diagnosticos');

    return JSON.stringify(result);
  }

  @Get('/centrosasistenciales')
  async findCentrosAsistenciales() {

    const result = await this.inicioService.centroAsistencialService();

    if (!result) throw new BadRequestException('Error al cargar diagnosticos');

    return JSON.stringify(result);
  }
}