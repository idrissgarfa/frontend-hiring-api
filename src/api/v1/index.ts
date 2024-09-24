import { createElysia } from "../../elysia";
import controller from "./issues/controller";

export const apiRouter = createElysia({ prefix: "/v1" })
  .get("/health-check", () => "All Good", { tags: ["Status"] })
  .use(controller);
