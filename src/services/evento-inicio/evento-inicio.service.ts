import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ValueSetDto } from 'src/models/dto/value-set.dto';
import { ValueSet } from 'src/models/entities/value-set.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventoInicioService {

    constructor(
        @InjectRepository(ValueSet)
        private readonly valueSetRepository: Repository<ValueSet>
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

}
