import { Column, Entity, OneToOne } from "typeorm";
import { Base } from "../base/base.entity";
import { UserInfoEntity } from "./user-info.entity";

@Entity({ name: 'users' })
export class UserEntity extends Base {
    @Column()
    userName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;
    
    @OneToOne(() => (UserInfoEntity), (userInfo) => userInfo.user)
    userInfo: UserInfoEntity;
}