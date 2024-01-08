import { Column, Entity } from "typeorm";

@Entity({ name: 'CENTRO_ASISTENCIAL' })
export class CentroAsistencial {

    @Column({ primary: true, generated: true })
    ID_CENTRO: number;

    @Column()
    COD_DEIS_CENTRO: string;

    @Column()
    NOM_CENTRO: string;

    @Column()
    COD_REGION_CODEVS: string;

    @Column()
    NIVEL_ATENCION: string;

    @Column()
    COD_COMUNA_CODEVS: string;
}