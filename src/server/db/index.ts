import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { serverEnv } from "../lib/serverEnv.ts";
import * as schema from "./schema/index.ts";

const pool = new Pool({
	connectionString: serverEnv.DATABASE_URL,
});
export const db = drizzle(pool, { schema });
