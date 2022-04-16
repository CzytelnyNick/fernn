import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Status{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public mainName: string

    // klucz - dictionary
    @Column()
    public dictionaryLocalization: number
    
    @Column()
    public value: number
    
    @Column()
    public reported: boolean
    
    @Column()
    public sent: boolean

    @Column()
    public forCollection: boolean
    
    @Column()
    public received: boolean
}