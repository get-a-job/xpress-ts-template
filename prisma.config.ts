import * as dotenv from "dotenv";
import { expand as dotenvExpand } from "dotenv-expand";
import { defineConfig, env } from "prisma/config";

const myEnv = dotenv.config();
dotenvExpand(myEnv);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
