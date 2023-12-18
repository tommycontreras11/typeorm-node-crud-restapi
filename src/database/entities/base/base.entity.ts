import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class Base extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Generated('uuid')
    @Column()
    uuid: string;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;
}