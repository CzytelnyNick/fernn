import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dictionary{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public mainName: string

    @Column()
    public polish: string

    @Column()
    public english: string
}