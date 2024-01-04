import { Column, Entity } from "typeorm";

@Entity({ name: 'VALUE_SET' })
export class ValueSet {

    @Column({ primary: true, generated: true })
    ID_VALOR: number;

    @Column()
    ID_TIPO_VALUE_SET: number;

    @Column()
    CODE: string;

    @Column()
    SYSTEM: string;

    @Column()
    DISPLAY: string;

}