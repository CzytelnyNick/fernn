import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Style{
    @PrimaryGeneratedColumn()
    public _ID: number


    // dopisz debilu

    // // klucz - company
    // @Column()
    // public company: number
}