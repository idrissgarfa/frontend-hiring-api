import { and, asc, count, eq, inArray, SQLWrapper } from "drizzle-orm";
import { Pagination } from "../../../common/helpers/pagination";
import { Issue, issue, newIssue } from "../../../database/issue";
import { db } from "../../../lib/drizzle";

export default class IssuesService {
  async get(pagination: Pagination, filters: SQLWrapper[]): Promise<Issue[]> {
    return await db
      .select()
      .from(issue)
      .where(and(...filters))
      .orderBy(asc(issue.createdAt))
      .offset(pagination.offset)
      .limit(pagination.pageSize);
  }

  async getById(issueId: string): Promise<Issue> {
    return await db
      .select()
      .from(issue)
      .where(eq(issue.id, issueId))
      .then((rows) => rows[0]);
  }

  async count(): Promise<number> {
    return await db
      .select({ count: count() })
      .from(issue)
      .then((rows) => rows[0].count);
  }

  async create(data: newIssue): Promise<Issue> {
    return await db
      .insert(issue)
      .values(data)
      .returning()
      .then((rows) => rows[0]);
  }

  async update(issueId: string, data: newIssue): Promise<Issue> {
    return await db
      .update(issue)
      .set(data)
      .returning()
      .where(eq(issue.id, issueId))
      .then((rows) => rows[0]);
  }

  async delete(issueId: string): Promise<void> {
    await db.delete(issue).where(eq(issue.id, issueId));
  }

  async deleteBulk(issuesIds: string[]): Promise<void> {
    await db.delete(issue).where(inArray(issue.id, issuesIds));
  }
}
