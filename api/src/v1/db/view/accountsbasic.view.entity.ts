import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class accountsbasicview{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public login: string

    @Column()
    public password: string

    @Column()
    public email: string
    
    @Column()
    public firstName: string
    
    @Column()
    public lastName: string
    
    @Column()
    public scssFile: string
    
    @Column()
    public cssFile: string
    
    @Column()
    public code: string
    
    @Column()
    public language: string

    @Column()
    public permissions: number
    
    @Column()
    public active: boolean

    @Column()
    public CID: number
    
}