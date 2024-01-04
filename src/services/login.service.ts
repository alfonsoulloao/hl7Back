import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/models/dto/login.dto';
import { Medico } from 'src/models/entities/medico.entity';
import { LoginInput } from 'src/models/inputs/login.Input';
import { Repository } from 'typeorm';

@Injectable()
export class LoginServices {

  constructor(
    @InjectRepository(Medico)
    private readonly medicoRepository: Repository<Medico>
  ) { }

  async loginService(loginData: LoginInput) {
    try {

      const queryResult = await this.medicoRepository.findOneBy({ NOM_USUARIO: loginData.correo, PASS_USUARIO: loginData.contraseña });

      const loginResult: LoginDto = {
        codRnpi: queryResult.COD_RNPI,
        nroRut: queryResult.NRO_RUT,
        dvRut: queryResult.DV_RUT,
        nombresMedico: queryResult.NOMBRES_MEDICO,
        apepatMedico: queryResult.APEPAT_MEDICO,
        apematMedico: queryResult.APEMAT_MEDICO,
        codTitulo: queryResult.COD_TITULO,
      };

      return loginResult;

    } catch (error) {
      console.log(error);
    }
  }
}
