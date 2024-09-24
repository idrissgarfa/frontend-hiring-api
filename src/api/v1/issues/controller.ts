import { eq, ilike, SQLWrapper } from "drizzle-orm";
import Elysia from "elysia";
import Errors from "../../../common/constants/errors";
import HttpStatusCodes from "../../../common/constants/http-status";
import { APIError } from "../../../common/exceptions/api-error";
import {
  getPaginationMetadata,
  getPaginationOptions,
} from "../../../common/helpers/pagination";
import { issue } from "../../../database/issue";
import Schema from "./model";
import IssuesService from "./service";

export default new Elysia({
  prefix: "/issues",
})
  .decorate("issuesService", new IssuesService())
  .model(Schema)
  .get(
    "/",
    async ({ issuesService, query, set }) => {
      const pagination = getPaginationOptions(query);
      const { search, status, type } = query;

      const filters: SQLWrapper[] = [];

      if (status) {
        filters.push(eq(issue.status, status));
      }

      if (type) {
        filters.push(eq(issue.type, type));
      }

      if (search) {
        filters.push(ilike(issue.title, `%${search}%`));
      }

      const [issuesList, issuesCount] = await Promise.all([
        await issuesService.get(pagination, filters),
        await issuesService.count(),
      ]);

      set.status = "OK";
      return {
        issues: issuesList,
        meta: getPaginationMetadata(pagination, issuesCount),
      };
    },
    {
      tags: ["Issues API"],
      query: "get.query",
    }
  )
  .get(
    "/:issueId",
    async ({ issuesService, params, set }) => {
      const { issueId } = params;

      const existingIssue = await issuesService.getById(issueId);

      if (!existingIssue) {
        throw new APIError(Errors.ISSUE.NOT_FOUND, HttpStatusCodes.NOT_FOUND);
      }
      set.status = "OK";
      return {
        ...existingIssue,
      };
    },
    {
      params: "get.params",
      tags: ["Issues API"],
    }
  )
  .post(
    "/",
    async ({ issuesService, body, set }) => {
      const newIssue = await issuesService.create(body);

      set.status = "Created";
      return {
        ...newIssue,
      };
    },
    {
      body: "create.body",
      tags: ["Issues API"],
    }
  )
  .put(
    "/:issueId",
    async ({ issuesService, params, body, set }) => {
      const { issueId } = params;

      const existingIssue = await issuesService.getById(issueId);

      if (!existingIssue) {
        throw new APIError(Errors.ISSUE.NOT_FOUND, HttpStatusCodes.NOT_FOUND);
      }

      const updatedIssue = await issuesService.update(issueId, body);

      set.status = "OK";
      return {
        ...updatedIssue,
      };
    },
    {
      params: "get.params",
      body: "update.body",
      tags: ["Issues API"],
    }
  )
  .delete(
    "/:issueId",
    async ({ issuesService, params, set }) => {
      const { issueId } = params;

      const existingIssue = await issuesService.getById(issueId);

      if (!existingIssue) {
        throw new APIError(Errors.ISSUE.NOT_FOUND, HttpStatusCodes.NOT_FOUND);
      }

      await issuesService.delete(issueId);
    },
    {
      params: "get.params",
      tags: ["Issues API"],
    }
  )
  .delete(
    "/bulk",
    async ({ issuesService, body, set }) => {
      const { issuesIds } = body;
      await issuesService.deleteBulk(issuesIds);

      set.status = "OK";
    },
    {
      body: "delete.bulk.body",
      tags: ["Issues API"],
    }
  );
