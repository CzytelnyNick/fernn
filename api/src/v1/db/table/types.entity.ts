// import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Types{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public dictionaryLocalization: number
    
    @Column()
    public value : number
}