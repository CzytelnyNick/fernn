import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products{
    @PrimaryGeneratedColumn()
    public _ID: number

    // klucz - manufacter
    @Column()
    public manufacturer	: number

    @Column()
    public model: string

    @Column()
    public SKU: string

    @Column()
    public EAN: string

    @Column()
    public verified: boolean
}