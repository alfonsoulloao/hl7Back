import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BundlesModel } from 'src/models/bundles/bundles';
import { CentroAsistencialDto } from 'src/models/dto/centro-asistencial.dto';
import { DiagnosticoDto } from 'src/models/dto/diagnostico.dto';
import { ValueSetDto } from 'src/models/dto/value-set.dto';
import { CentroAsistencial } from 'src/models/entities/centro-asistencial.entity';
import { Diagnostico } from 'src/models/entities/diagnostico.entity';
import { ValueSet } from 'src/models/entities/value-set.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';





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
                const valueSet: ValueSetDto = {
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
                const valueSet: ValueSetDto = {
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
                const valueSet: ValueSetDto = {
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

    async razonDerivacionservice() {
        try {

            const valueSetPaises: ValueSetDto[] = [];

            const queryResult = await this.valueSetRepository.findBy({ ID_TIPO_VALUE_SET: 5 });

            queryResult.forEach(element => {
                const valueSet: ValueSetDto = {
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

    async especialidadesService() {
        try {

            const valueSetPaises: ValueSetDto[] = [];

            const queryResult = await this.valueSetRepository.findBy({ ID_TIPO_VALUE_SET: 6 });

            queryResult.forEach(element => {
                const valueSet: ValueSetDto = {
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
                const diagnostico: DiagnosticoDto = {
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
                const centroAsis: CentroAsistencialDto = {
                    CodDeisCentro: element.COD_DEIS_CENTRO,
                    NomCentro: element.NOM_CENTRO,
                    
                }

                centrosAsistenciales.push(centroAsis);
            });

            return centrosAsistenciales;

        } catch (error) {
            console.log(error);
        }
    }


    async creaBundleInicioServices(bundleInicioinput:any) {
        try {  
            const inicio  = BundlesModel;
            
            inicio.meta.lastUpdated = String(Date.now());
            inicio.timestamp = String(Date.now());

            // Inicio Entry
            // MessageHeader    

            for (let index = 0; index <  inicio.entry.length; index++) {
               
                if(inicio.entry[index].resource.resourceType == "MessageHeader" ){
                    
                    inicio.entry[index].resource.meta.lastUpdated = String(Date.now());
                    inicio.entry[index].resource.id = uuidv4();
                }

                // ServiceRequest
                if(inicio.entry[index].resource.resourceType == "ServiceRequest" ){                                    
                    inicio.entry[index].resource.id = uuidv4();
                    inicio.entry[index].resource.extension[0].valueString = "";
                    inicio.entry[index].resource.extension[1].valueBoolean = bundleInicioinput.sospechaPatologiaGES;
                    inicio.entry[index].resource.extension[2].valueBoolean = bundleInicioinput.pacienteAlergico;
                    // especialidad de destino
                    inicio.entry[index].resource.extension[5].valueCodeableConcept.coding[0].code = bundleInicioinput.codeEspecialidadMedicaDestino;
                    // inicio.entry[1].resource.extension[5].valueCodeableConcept.coding[0].display  = bundleInicioinput.especialidadMedicaDestino;
                    inicio.entry[index].resource.authoredOn = bundleInicioinput.fechaSolicitudInterconsulta;
                   
                    inicio.entry[index].resource.reasonCode[0].coding[0].code = bundleInicioinput.codeRazonDerivacion;
                    inicio.entry[index].resource.reasonCode[0].coding[0].system = bundleInicioinput.codeRazonDerivacion;

                }


                // Encounter

                if(inicio.entry[index].resource.resourceType == "Encounter" ){
                    
                    inicio.entry[index].resource.meta.lastUpdated = String(Date.now());
                    inicio.entry[index].resource.id = uuidv4();
                    // inicio.entry[index].resource.extension[0].valueString = "";
                    inicio.entry[index].resource.extension[1].valueBoolean = bundleInicioinput.sospechaPatologiaGES;
                    inicio.entry[index].resource.extension[2].valueBoolean = bundleInicioinput.pacienteAlergico;
                    // especialidad de destino
                    inicio.entry[index].resource.extension[5].valueCodeableConcept.coding[0].code = bundleInicioinput.codeEspecialidadMedicaDestino;
                    // inicio.entry[1].resource.extension[5].valueCodeableConcept.coding[0].display  = bundleInicioinput.especialidadMedicaDestino;
                    inicio.entry[index].resource.authoredOn = bundleInicioinput.fechaSolicitudInterconsulta;
                   
                    inicio.entry[index].resource.reasonCode[0].coding[0].code = bundleInicioinput.codeRazonDerivacion;
                    inicio.entry[index].resource.reasonCode[0].coding[0].system = bundleInicioinput.codeRazonDerivacion;

                }


                

            }

          

                   




            return "valor de inicio ok";

        } catch (error) {
            console.log(error);
        }
    }
}
