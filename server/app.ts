import  express  from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { createConnection } from "typeorm";
import { User } from "./models/entities/User";
const PORT = process.env.PORT || 3000;
dotenv.config();

async function main() {
  const app = express();
  try {
    await createConnection({
      type: "mysql",
      username: "softbreak",
      password: "g91!YfZK1w6&",
      database: "sb_discord",
      host: "mysql.softbreak.io",
      port: 3306,
      entities: [User],
      synchronize: true,
    });
    console.log("db synced!");
  } catch (error) {
    console.log(error);
  }

  app.use("/", routes);
  app.listen(PORT, () => {
    console.log(`app listening port: ${PORT}`);
  });
}

main();
