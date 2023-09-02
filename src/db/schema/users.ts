import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

 
export const users = pgTable('online-users', {
  id: serial('id').primaryKey(),  // serial ka mtlb h k tarteb se age jae ga # rept ni ho ga
  fullName: text('full_name'),
  phone: varchar('phone', { length: 256 }),
});
 
export type User = typeof users.$inferSelect; // return type when queried
export type NewUser = typeof users.$inferInsert; // insert type