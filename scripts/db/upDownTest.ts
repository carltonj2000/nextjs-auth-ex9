import { createKysely } from "@vercel/postgres-kysely";
import { up, down } from "./migrations/migration001";
import { Database } from "../../src/db/types";
import { config } from "dotenv";
config({ path: ".env.local" });

const db = createKysely<Database>();

async function main() {
  if (process.argv.length > 2 && process.argv[2] == "down") await down(db);
  else await up(db);
}

main()
  .then((msg) => console.log("test finished", msg))
  .catch((err) => console.log("test error", err));
