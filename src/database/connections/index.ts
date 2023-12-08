import path from "path";
import { DataSource } from "typeorm"; 

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "typeorm-db",
    entities: [path.join(__dirname, '../entities/entity/*.{ts,js}')],
    synchronize: false,
    migrations: [path.join(__dirname, '../migrations/*.{ts,js}')],
    logging: true
})