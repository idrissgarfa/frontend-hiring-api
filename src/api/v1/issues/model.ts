import { t } from "elysia";
import { enumToPgEnum } from "../../../common/helpers/enum";
import { IssueStatus, IssueType } from "../../../database/issue";

export default {
  "create.body": t.Object({
    title: t.String({
      minLength: 6,
    }),
    type: t.UnionEnum(enumToPgEnum(IssueType)),
    description: t.String({ minLength: 6 }),
  }),
  "update.body": t.Object({
    title: t.String({
      minLength: 6,
    }),
    status: t.UnionEnum(enumToPgEnum(IssueStatus)),
    type: t.UnionEnum(enumToPgEnum(IssueType)),
    description: t.String({ minLength: 6 }),
  }),
  "get.params": t.Object({
    issueId: t.String({ format: "uuid" }),
  }),
  "get.query": t.Object({
    page: t.Optional(t.String()),
    pageSize: t.Optional(t.String()),
    search: t.Optional(t.String()),
    status: t.Optional(t.String()),
    type: t.Optional(t.String()),
  }),
  "delete.bulk.body": t.Object({
    issuesIds: t.Array(t.String({ format: "uuid" })),
  }),
};
