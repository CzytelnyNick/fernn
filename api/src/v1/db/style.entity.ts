import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Style{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public dictionaryLocalizationName: number

    @Column()
    public dictionaryLocalizationDescription: number

    @Column()
    public preview: string

    @Column()
    public scssFile: string

    @Column()
    public cssFile: string
}