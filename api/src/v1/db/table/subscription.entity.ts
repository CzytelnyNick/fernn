import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subscription{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public company: number

    @Column()
    public start: Date
    
    @Column()
    public end: Date
    
    @Column()
    public planName: string
    
    @Column()
    public maxAccounts: number
    
    @Column()
    public maxComplaints: number
    
    @Column()
    public maxAttachment: number

    @Column()
    public notyfication: boolean
}