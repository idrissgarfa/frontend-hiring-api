import Elysia, { type ElysiaConfig } from "elysia";
import { APIError } from "./common/exceptions/api-error";

export const createContext = new Elysia()
  .error({ APIError })
  .onError(({ error, code }) => {
    console.log(error);
    switch (code) {
      case "VALIDATION":
        return Response.json(
          {
            message: "Validation error",
            fieldErrors: error.all.reduce(
              (acc: Record<string, string>, x: any) => {
                acc[x.path.slice(1)] = String(x.schema.error ?? x.message);
                return acc;
              },
              {}
            ),
          },
          {
            status: error.status,
          }
        );

      case "APIError":
        return Response.json(
          {
            message: error.message,
            code: error.errorCode,
          },
          {
            status: error.status,
          }
        );
    }
  })
  .as("plugin");

export const createElysia = <P extends string, S extends boolean>(
  c?: ElysiaConfig<P, S>
) => new Elysia(c).use(createContext);
