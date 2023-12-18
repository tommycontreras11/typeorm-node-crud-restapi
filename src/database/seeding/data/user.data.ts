import { UserInfoEntity } from "../../entities/entity/user-info.entity";

interface IUserDataSeed {
    userName: string
    firstName: string
    lastName: string
    userInfo: Partial<UserInfoEntity>
}

export const userData: IUserDataSeed[] = [
    {
        userName: 'bwayne',
        firstName: 'Bruce',
        lastName: 'Wayne',
        userInfo: {
            birthDate: new Date(),
            address: 'C/ Gualey',
            gender: 'MALE'
        }    
    }
]