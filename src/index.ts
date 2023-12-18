import "reflect-metadata";
import app from "./app"
import { AppDataSource } from "./database/connections";

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected");
        app.listen(4000)
        console.log('Server is listening on port', 4000)
    } catch (e) {
        console.error(e)
    }
}

main()