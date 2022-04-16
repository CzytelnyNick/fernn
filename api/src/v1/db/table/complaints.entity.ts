import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Complaints{
    @PrimaryGeneratedColumn()
    public _ID: number

    @Column()
    public product: number

    @Column()
    public person: number

    @Column()
    public status: number

    @Column()
    public company: number

    @Column()
    public section: number

    @Column()
    public type: number

    @Column()
    public toAmount: number

    @Column()
    public code: string

    @Column()
    public complaintNumber: string

    @Column()
    public pin: number

    @Column()
    public description: string

    @Column()
    public serialNo: string

    @Column()
    public purchaseNumber: string

    @Column()
    public purchaseDate: Date

    @Column()
    public demageDate: Date

    @Column()
    public expectations: number

    @Column()
    public notification: boolean
}