import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { privateDecrypt } from 'crypto';
import { CentroAsistencialDto } from 'src/models/dto/centro-asistencial.dto';
import { DiagnosticoDto } from 'src/models/dto/diagnostico.dto';
import { ValueSetDto } from 'src/models/dto/value-set.dto';
import { CentroAsistencial } from 'src/models/entities/centro-asistencial.entity';
import { Diagnostico } from 'src/models/entities/diagnostico.entity';
import { ValueSet } from 'src/models/entities/value-set.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventoInicioService {

    constructor(
        @InjectRepository(ValueSet)
        private readonly valueSetRepository: Repository<ValueSet>,
        @InjectRepository(Diagnostico)
        private readonly diagnosticoRepository: Repository<Diagnostico>,
        @InjectRepository(CentroAsistencial)
        private readonly centroAsistencialRepository: Repository<CentroAsistencial>
    ) { }

    async paisesService() {
        try {

            const valueSetPaises: ValueSetDto[] = [];

            const queryResult = await this.valueSetRepository.findBy({ ID_TIPO_VALUE_SET: 1 });

            queryResult.forEach(element => {
                var valueSet: ValueSetDto = {
                    code: element.CODE,
                    system: element.SYSTEM,
                    display: element.DISPLAY
                }

                valueSetPaises.push(valueSet);
            });

            return valueSetPaises;

        } catch (error) {
            console.log(error);
        }
    }

    async comunasService() {
        try {

            const valueSetPaises: ValueSetDto[] = [];

            const queryResult = await this.valueSetRepository.findBy({ ID_TIPO_VALUE_SET: 4 });

            queryResult.forEach(element => {
                var valueSet: ValueSetDto = {
                    code: element.CODE,
                    system: element.SYSTEM,
                    display: element.DISPLAY
                }

                valueSetPaises.push(valueSet);
            });

            return valueSetPaises;

        } catch (error) {
            console.log(error);
        }
    }

    async sexoAdminService() {
        try {

            const valueSetPaises: ValueSetDto[] = [];

            const queryResult = await this.valueSetRepository.findBy({ ID_TIPO_VALUE_SET: 8 });

            queryResult.forEach(element => {
                var valueSet: ValueSetDto = {
                    code: element.CODE,
                    system: element.SYSTEM,
                    display: element.DISPLAY
                }

                valueSetPaises.push(valueSet);
            });

            return valueSetPaises;

        } catch (error) {
            console.log(error);
        }
    }

    async diagnosticoService() {
        try {

            const diagnosticos: DiagnosticoDto[] = [];

            const queryResult = await this.diagnosticoRepository.findBy({ NOM_CAT_DIAG: 'SNOMED' });

            queryResult.forEach(element => {
                var diagnostico: DiagnosticoDto = {
                    codeDiag: element.CODE_DIAG,
                    systemDiag: element.SYSTEM_DIAG,
                    displayDiag: element.DISPLAY_DIAG
                }

                diagnosticos.push(diagnostico);
            });

            return diagnosticos;

        } catch (error) {
            console.log(error);
        }
    }

    async centroAsistencialService() {
        try {

            const centrosAsistenciales: CentroAsistencialDto[] = [];

            const queryResult = await this.centroAsistencialRepository.find();

            queryResult.forEach(element => {
                var centroAsis: CentroAsistencialDto = {
                    //IdCentro: element.ID_CENTRO,
                    CodDeisCentro: element.COD_DEIS_CENTRO,
                    NomCentro: element.NOM_CENTRO,
                    //CodRegionCodeVS: element.COD_REGION_CODEVS,
                    //NivelAtencion: element.NIVEL_ATENCION,
                    //CodComunaCodeVS: element.COD_COMUNA_CODEVS
                }

                centrosAsistenciales.push(centroAsis);
            });

            return centrosAsistenciales;

        } catch (error) {
            console.log(error);
        }
    }
}
