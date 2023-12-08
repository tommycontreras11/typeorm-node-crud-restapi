import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1702057480475 implements MigrationInterface {
    name = 'InitialMigration1702057480475'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."user-info_gender_enum" AS ENUM('MALE', 'FEMALE', 'OTHER')`);
        await queryRunner.query(`CREATE TABLE "user-info" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "deleteAt" TIMESTAMP, "birthDate" date NOT NULL, "address" character varying NOT NULL, "gender" "public"."user-info_gender_enum" NOT NULL, "userInfoId" integer NOT NULL, CONSTRAINT "REL_83597aee96c577b0c46d1f6630" UNIQUE ("userInfoId"), CONSTRAINT "PK_17470eb7d3fd325d9c872551fc6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "createAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), "deleteAt" TIMESTAMP, "username" character varying NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user-info" ADD CONSTRAINT "FK_83597aee96c577b0c46d1f66308" FOREIGN KEY ("userInfoId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user-info" DROP CONSTRAINT "FK_83597aee96c577b0c46d1f66308"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "user-info"`);
        await queryRunner.query(`DROP TYPE "public"."user-info_gender_enum"`);
    }

}
