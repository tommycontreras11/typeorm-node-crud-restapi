import { UserInfoEntity } from "../../database/entities/entity/user-info.entity";
import { UserEntity } from "../../database/entities/entity/user.entity";
import { CreateUserDto } from "../../dto/user.dto";

export async function createUserService({ userName, ...payload }: CreateUserDto) {
    const founduserName = await UserEntity.findOne({ where: { userName } }).catch(e => {
        console.error('UserEntity.findOne: ', e)
        return null
    })

    if(founduserName) return Promise.reject({ message: 'userName is already in use' })

    const user = await UserEntity.create({ userName, ...payload }).save().catch(e => {
        console.error('UserEntity.create: ', e)
        return null
    })

    if(!user) return Promise.reject({ message: 'Something went wrong while creating the user' })

    const userInfo = await UserInfoEntity.create({ ...payload, userId: user.id }).save().catch(e => {
        console.error('UserInfoEntity.create: ', e)
        return null
    })

    if(!userInfo) return Promise.reject({ message: 'Something went wrong while creating the user info' })

    return user;
}