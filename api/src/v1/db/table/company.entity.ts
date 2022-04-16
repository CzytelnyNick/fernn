import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public name: string

    @Column()
    public phone: string

    @Column()
    public email: string

    @Column()
    public country: number

    @Column()
    public city: string

    @Column()
    public street: string

    @Column()
    public locationNumber: string

    @Column()
    public zipCode: number

    @Column()
    public defaultSection: number

    @Column()
    public defaultStyle: number
}