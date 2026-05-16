import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
import { ENV } from "../config/env";

if (!ENV.DATABASE_URL) {
  throw new Error("DATABASE_URL라는 환경변수가 존재하지 않습니다.");
}

// initialize PostgreSQL connection pool
const pool = new Pool({ connectionString: ENV.DATABASE_URL });

// 첫 연결 로그
pool.on("connect", () => {
  console.log("Database connected successfully");
});

// 에러 로그
pool.on("error", (err) => {
  console.error("Database connection error:", err);
});

export const db = drizzle({ client: pool, schema });
