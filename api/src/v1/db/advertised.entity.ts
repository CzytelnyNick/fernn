import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Advertised{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public firstName: string

    @Column()
    public lastName: string

    @Column()
    public language: string

    @Column()
    public email: string

    @Column()
    public phone: string

    @Column()
    public country: number
}