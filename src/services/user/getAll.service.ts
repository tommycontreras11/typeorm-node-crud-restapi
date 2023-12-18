import { FindManyOptions } from "typeorm";
import { UserEntity } from "../../database/entities/entity/user.entity"

export async function getAllUserService(options?: FindManyOptions<UserEntity>) {
    const users = await UserEntity.find(options).catch(e => {
        console.error('UserEntity.find(): ', e)
        return null
    });
    
    if(!users) return Promise.reject({ message: 'Users not found' })

    return users;
}