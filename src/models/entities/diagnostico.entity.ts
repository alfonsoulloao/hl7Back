import { Column, Entity } from "typeorm";

@Entity({ name: 'CAT_DIAGNOSTICO' })
export class Diagnostico {

    @Column({ primary: true, generated: true })
    ID_CAT_DIAG: number;

    @Column()
    NOM_CAT_DIAG: string;

    @Column()
    CODE_DIAG: string;

    @Column()
    SYSTEM_DIAG: string;

    @Column()
    DISPLAY_DIAG: string;
}