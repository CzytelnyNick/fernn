import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sections {
    @PrimaryGeneratedColumn()
    public _ID: number

    // // popraw debilu
    // @Column()
    // public ss: string
}