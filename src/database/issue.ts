import { pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

import { enumToPgEnum } from "../common/helpers/enum";
import { defaultSchema } from "./default";

export enum IssueStatus {
  SOLVED = "SOLVED",
  PENDING = "PENDING",
  IN_PROGRESS = "IN_PROGRESS",
}

export enum IssueType {
  DEVELOPMENT = "DEVELOPMENT",
  ANALYTICS = "ANALYTICS",
  UIUX = "UIUX",
  USER_PROBLEM = "USER_PROBLEM",
}

export const issueStatusEnum = pgEnum("status_enum", enumToPgEnum(IssueStatus));
export const issueTypeEnum = pgEnum("type_enum", enumToPgEnum(IssueType));

export const issue = pgTable("issue", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  status: issueStatusEnum("status").notNull().default(IssueStatus.PENDING),
  type: issueTypeEnum("type").notNull().default(IssueType.USER_PROBLEM),
  ...defaultSchema,
});

export type Issue = typeof issue.$inferSelect;
export type newIssue = typeof issue.$inferInsert;
