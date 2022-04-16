import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Manufacters{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public manufacter: string

    @Column()
    public verified: boolean
}