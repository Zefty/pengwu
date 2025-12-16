import { defineConfig } from "drizzle-kit";
import { serverEnv } from "@/server/lib/serverEnv";

export default defineConfig({
	out: "./src/server/db/drizzle",
	schema: "./src/server/db/schema/index.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: serverEnv.DATABASE_URL,
	},
});
