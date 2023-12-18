import { UserInfoEntity } from "../../database/entities/entity/user-info.entity";
import { UserEntity } from "../../database/entities/entity/user.entity";
import { UpdateUserDto } from "../../dto/user.dto";

export async function updateUserService({ userUUID, ...payload }: UpdateUserDto) {
    const foundUser = await UserEntity.findOne({ where: { uuid: userUUID } }).catch(e => {
        console.error('UserEntity.findOne: ', e)
        return null
    })

    if(!foundUser) return Promise.reject({ message: 'User not found' })

    const user = await UserEntity.update({ uuid: userUUID }, {
        ...payload
    }).catch(e => {
        console.error('UserEntity.update: ', e)
        return null
    })

    if(!user) return Promise.reject({ message: 'Something went wrong while updating the user' })

    const userInfo = await UserInfoEntity.update({ userId: foundUser.id }, {
        ...payload
    }).catch(e => {
        console.error('UserInfoEntity.update: ', e)
        return null
    })

    if(!userInfo) return Promise.reject({ message: 'Something went wrong while updating user information' })

    return user
}