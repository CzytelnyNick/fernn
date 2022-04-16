import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public date: Date

    @Column()
    public operation: string

    @Column()
    public session: string
    
    @Column()
    public account: number

    @Column()
    public data: string
}