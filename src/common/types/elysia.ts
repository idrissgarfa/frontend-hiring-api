import { t } from 'elysia';

const staticElysiaUUID = t.String({ format: 'uuid' }).static;
export type ElysiaUUID = typeof staticElysiaUUID;

const staticElysiaInteger = t.Integer().static;
export type ElysiaInteger = typeof staticElysiaInteger;
