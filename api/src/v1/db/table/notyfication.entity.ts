import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Notyfication{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public type	: number

    @Column()
    public title: string

    @Column()
    public subTitle: string

    @Column()
    public content: string

    @Column()
    public important: boolean
    
    @Column()
    public sent: boolean
}