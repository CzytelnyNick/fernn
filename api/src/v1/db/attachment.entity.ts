import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Attachment{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public fileName: string

    @Column()
    public complaint: number

    @Column()
    public date: Date
}