import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Assigment{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public account: number

    @Column()
    public company: number

    @Column()
    public section: number
}