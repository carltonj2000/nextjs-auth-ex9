import * as path from "path";
import { promises as fs } from "fs";
import { Migrator, FileMigrationProvider } from "kysely";
import { Database } from "../../src/db/types";
import { config } from "dotenv";
import { createKysely } from "@vercel/postgres-kysely";
config({ path: ".env.local" });

async function migrateToLatest() {
  const db = createKysely<Database>();

  const migrationFolder = path.join(__dirname, "./migrations");
  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({ fs, path, migrationFolder }),
  });

  const { error, results } = await migrator.migrateToLatest();

  results?.forEach((it) => {
    if (it.status === "Success") {
      console.log(`migration "${it.migrationName}" was executed successfully`);
    } else if (it.status === "Error") {
      console.error(`failed to execute migration "${it.migrationName}"`);
    }
  });

  if (error) {
    console.error("failed to migrate", error);
    process.exit(1);
  }

  await db.destroy();
}

migrateToLatest()
  .then((res) => console.log("migration ended", res))
  .catch((err) => console.log("migration error", err));
