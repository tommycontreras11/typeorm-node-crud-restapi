import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { Base } from "../base/base.entity";

export enum GENDER_ENUM {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

export type GENDER_TYPE = `${GENDER_ENUM}`;

@Entity({ name: 'user-info' })
export class UserInfoEntity extends Base {
    @Column({ type: 'date' })
    birthDate: Date;

    @Column()
    address: string;

    @Column({ type: 'enum', enum: GENDER_ENUM })
    gender: GENDER_TYPE;
    
    @Column()
    userId: number;

    @OneToOne(() => (UserEntity), (user) => user.userInfo)
    @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
    user: UserEntity;
}