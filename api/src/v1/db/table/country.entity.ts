import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Country{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public name: string

    @Column()
    public code: string

    @Column()
    public language: string

    @Column()
    public phonePrefix: string

    @Column()
    public flag: string
}