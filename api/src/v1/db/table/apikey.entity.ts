import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class ApiKey{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column({ length: 50, unique: true })
    public apiKey: string

    @Column()
    public active: boolean
}