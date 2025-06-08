import { users, terminalSessions, commandLogs, type User, type InsertUser, type TerminalSession, type InsertTerminalSession, type CommandLog, type InsertCommandLog } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createSession(session: InsertTerminalSession): Promise<TerminalSession>;
  getSession(sessionId: string): Promise<TerminalSession | undefined>;
  updateSession(sessionId: string, updates: Partial<TerminalSession>): Promise<void>;
  logCommand(commandLog: InsertCommandLog): Promise<CommandLog>;
  getSessionCommands(sessionId: string): Promise<string[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createSession(session: InsertTerminalSession): Promise<TerminalSession> {
    const [newSession] = await db
      .insert(terminalSessions)
      .values(session)
      .returning();
    return newSession;
  }

  async getSession(sessionId: string): Promise<TerminalSession | undefined> {
    const [session] = await db
      .select()
      .from(terminalSessions)
      .where(eq(terminalSessions.sessionId, sessionId));
    return session || undefined;
  }

  async updateSession(sessionId: string, updates: Partial<TerminalSession>): Promise<void> {
    await db
      .update(terminalSessions)
      .set({ ...updates, lastActivity: new Date() })
      .where(eq(terminalSessions.sessionId, sessionId));
  }

  async logCommand(commandLog: InsertCommandLog): Promise<CommandLog> {
    const [log] = await db
      .insert(commandLogs)
      .values(commandLog)
      .returning();
    return log;
  }

  async getSessionCommands(sessionId: string): Promise<string[]> {
    const session = await this.getSession(sessionId);
    return session?.commandsExecuted || [];
  }
}

export const storage = new DatabaseStorage();
