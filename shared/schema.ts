import { pgTable, text, serial, integer, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const terminalSessions = pgTable("terminal_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id),
  sessionId: text("session_id").unique().notNull(),
  commandsExecuted: jsonb("commands_executed").$type<string[]>().default([]).notNull(),
  whoamiUnlocked: integer("whoami_unlocked").default(0).notNull(), // 0 = false, 1 = true
  createdAt: timestamp("created_at").defaultNow().notNull(),
  lastActivity: timestamp("last_activity").defaultNow().notNull(),
});

export const commandLogs = pgTable("command_logs", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").references(() => terminalSessions.sessionId).notNull(),
  command: text("command").notNull(),
  parameters: text("parameters"),
  executedAt: timestamp("executed_at").defaultNow().notNull(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(terminalSessions),
}));

export const terminalSessionsRelations = relations(terminalSessions, ({ one, many }) => ({
  user: one(users, {
    fields: [terminalSessions.userId],
    references: [users.id],
  }),
  commandLogs: many(commandLogs),
}));

export const commandLogsRelations = relations(commandLogs, ({ one }) => ({
  session: one(terminalSessions, {
    fields: [commandLogs.sessionId],
    references: [terminalSessions.sessionId],
  }),
}));

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertTerminalSessionSchema = createInsertSchema(terminalSessions).pick({
  userId: true,
  sessionId: true,
  commandsExecuted: true,
  whoamiUnlocked: true,
}).extend({
  commandsExecuted: z.array(z.string()).default([]),
});

export const insertCommandLogSchema = createInsertSchema(commandLogs).pick({
  sessionId: true,
  command: true,
  parameters: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertTerminalSession = z.infer<typeof insertTerminalSessionSchema>;
export type TerminalSession = typeof terminalSessions.$inferSelect;
export type InsertCommandLog = z.infer<typeof insertCommandLogSchema>;
export type CommandLog = typeof commandLogs.$inferSelect;
