import { IsDate, IsEnum, IsNotEmpty, IsString, IsUUID } from "class-validator";
import { GENDER_ENUM, GENDER_TYPE } from "../database/entities/entity/user-info.entity";
import { Expose } from "class-transformer";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Expose()
    username: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    firstname: string;

    @IsString()
    @IsNotEmpty()
    @Expose()
    lastname: string;

    @IsDate()
    @IsNotEmpty()
    @Expose()
    birthDate: Date;

    @IsString()
    @IsNotEmpty()
    @Expose()
    address: string;

    @IsEnum(GENDER_ENUM)
    @IsNotEmpty()
    @Expose()
    gender: GENDER_TYPE;
}

export class UpdateUserDto extends CreateUserDto {
    @IsUUID('4')
    @IsString()
    @Expose()
    @IsNotEmpty()
    userUUID: string;
}