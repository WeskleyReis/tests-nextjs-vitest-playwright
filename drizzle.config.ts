import { getFullEnv } from "@/env/configs";
import { defineConfig } from "drizzle-kit";

const {databaseFile, drizzleMigrationsFolder, drizzleSchemasFiles} =
  getFullEnv()

export default defineConfig({
  out: drizzleMigrationsFolder,
  schema: drizzleSchemasFiles,
  dialect: 'sqlite',
  dbCredentials: {
    url: databaseFile,
  },
})