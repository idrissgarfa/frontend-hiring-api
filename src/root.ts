import cors, { HTTPMethod } from "@elysiajs/cors";
import swagger, { ElysiaSwaggerConfig } from "@elysiajs/swagger";
import { apiRouter } from "./api/v1";
import { createElysia } from "./elysia";

const corsConfig = {
  origin: "*",
  methods: ["GET", "POST", "PATCH", "DELETE", "PUT"] as HTTPMethod[],
  allowedHeaders: "*",
  exposedHeaders: "*",
};

const swaggerConfig = {
  path: "/docs",
} as ElysiaSwaggerConfig<"/docs">;

export const app = createElysia({ prefix: "/api" })
  .use(swagger(swaggerConfig))
  .use(cors(corsConfig))
  .use(apiRouter)
  .listen(4444);

const logo = `
  ╔═══════════════════════════════════════════════════════════════════╗
  ║                                                                   ║
  ║          █████╗ ██╗  ██╗███████╗██████╗  █████╗                   ║
  ║         ██╔══██╗██║ ██╔╝██╔════╝██╔══██╗██╔══██╗                  ║
  ║         ███████║█████╔╝ █████╗  ██████╔╝███████║                  ║
  ║         ██╔══██║██╔═██╗ ██╔══╝  ██╔══██╗██╔══██║                  ║
  ║         ██║  ██║██║  ██╗███████╗██║  ██║██║  ██║                  ║
  ║         ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝                  ║
  ║                                                                   ║
  ╚═══════════════════════════════════════════════════════════════════╝
  `;

const serverLog = `
  ***************************************************************************
  *                                                                         *
  *   🚀 Elysia Server is up and running on: http://localhost:4444/api/v1   *
  *                                                                         *
  *   📚 API Documentation: http://localhost:4444/api/docs                  *
  *                                                                         *
  *   🌱 To access Drizzle Studio, run: bun db:studio                       *
  *                                                                         *
  ***************************************************************************
`;

console.info(logo);
console.info(serverLog);
export type API = typeof app;
