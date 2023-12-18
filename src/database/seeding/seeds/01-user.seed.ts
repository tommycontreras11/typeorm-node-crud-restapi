import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { UserEntity } from "../../entities/entity/user.entity";
import { userData } from "../data/user.data";
import { UserInfoEntity } from "../../entities/entity/user-info.entity";

export default class UserSeeder implements Seeder {
    public async run(_factory: Factory, dataSource: DataSource): Promise<void> {
        try {
            const userRepository = dataSource.getRepository(UserEntity);
            const userInfoRepository = dataSource.getRepository(UserInfoEntity);

            await Promise.all(
                userData.map(async (userData) => {
                    const exists = await UserEntity.findOne({ 
                        where: { userName: userData.userName }
                     }).catch(e => {
                        console.error('userData Validation Error', e)
                     })
                    
                    if(exists) return
                    
                    const user = await userRepository.create({
                        userName: userData.userName,
                        firstName: userData.firstName,
                        lastName: userData.lastName
                    }).save();

                    await userInfoRepository.create({
                        user,
                        birthDate: userData.userInfo.birthDate,
                        address: userData.userInfo.address,
                        gender: userData.userInfo.gender
                    }).save();

                })
            )

        } catch (error) {
            return console.error(
                `❌ ~ file: user.seed.ts ~ UserSeeder ~ run ~ error: `,
                error
            )
        }
    }    
}