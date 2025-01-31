// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const OrgMembershipsSchema = z.object({
  id: z.string().uuid(),
  role: z.string(),
  status: z.string().default("invited"),
  inviteEmail: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string().uuid().nullable().optional(),
  orgId: z.string().uuid(),
  roleId: z.string().uuid().nullable().optional()
});

export type TOrgMemberships = z.infer<typeof OrgMembershipsSchema>;
export type TOrgMembershipsInsert = Omit<TOrgMemberships, TImmutableDBKeys>;
export type TOrgMembershipsUpdate = Partial<Omit<TOrgMemberships, TImmutableDBKeys>>;
