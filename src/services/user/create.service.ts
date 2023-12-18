import { UserInfoEntity } from "../../database/entities/entity/user-info.entity";
import { UserEntity } from "../../database/entities/entity/user.entity";
import { CreateUserDto } from "../../dto/user.dto";

export async function createUserService({ username, ...payload }: CreateUserDto) {
    const foundUserName = await UserEntity.findOne({ where: { username } }).catch(e => {
        console.error('UserEntity.findOne: ', e)
        return null
    })

    if(foundUserName) return Promise.reject({ message: 'Username is already in use' })

    const user = await UserEntity.create({ username, ...payload }).save().catch(e => {
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