import { timestamp } from "drizzle-orm/pg-core";

export const updatedAndCreatedAt = {
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { mode: "date", precision: 3 })
    .notNull()
    .$onUpdate(() => new Date()),
};

export const defaultSchema = {
  ...updatedAndCreatedAt,
};
