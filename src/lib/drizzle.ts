import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

config({ path: ".env" });

export const queryClient = postgres(process.env.DATABASE_URL!);
export const db = drizzle(queryClient);
