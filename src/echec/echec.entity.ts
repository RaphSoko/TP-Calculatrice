import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class succes{
    @PrimaryGeneratedColumn()
    id : number;

    @CreateDateColumn({name: 'created_at'})
    created_at: Date;
}