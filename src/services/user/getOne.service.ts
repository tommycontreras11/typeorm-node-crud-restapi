import { UserEntity } from "../../database/entities/entity/user.entity";

export async function getOneUserService(uuid: string) {
    const foundUser = await UserEntity.findOne({ where: { uuid } }).catch(e => {
        console.error('UserEntity.findOne: ', e)
        return null
    })

    if(!foundUser) return Promise.reject({ message: 'User not found' })

    return foundUser
}