import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sections {
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public name: string

    @Column()
    public company: number
}