import { Column, Entity } from "typeorm";

@Entity()
export class Medico {

    @Column({primary:true, generated: true})
    ID_MEDICO: number;
    
    @Column()
    COD_RNPI: string;
    
    @Column()
    NRO_RUT: string;
    
    @Column()
    DV_RUT: string;
    
    @Column()
    NOMBRES_MEDICO: string;
    
    @Column()
    APEPAT_MEDICO: string;
    
    @Column()
    APEMAT_MEDICO: string;
    
    @Column()
    COD_TITULO: string;
    
    @Column()
    NOM_USUARIO: string;
    
    @Column()
    PASS_USUARIO: string;

}