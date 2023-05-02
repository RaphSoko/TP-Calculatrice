import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';


@Entity()
export class succes{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    timeTakenMs: number;
}