import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expection{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public mainName: string

    // klucz - dictionary
    @Column()
    public dictionaryLocalization: number
}