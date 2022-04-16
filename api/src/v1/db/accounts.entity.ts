import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Accounts{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public company: number

    @Column()
    public login: string

    @Column()
    public email: string

    @Column()
    public phone: string

    @Column()
    public password: string

    @Column()
    public permissions: number

    @Column()
    public firstName: string

    @Column()
    public lastName: string

    @Column()
    public country: number

    @Column()
    public section: number

    @Column()
    public defaultStyle: number

    @Column()
    public active: boolean
}