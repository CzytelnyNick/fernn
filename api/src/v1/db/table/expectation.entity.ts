import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expection{
    @PrimaryGeneratedColumn()
    public _ID: number
    
    @Column()
    public dictionaryLocalization: number

    @Column()
    public value: number
}