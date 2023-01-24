import { createClient } from "supabase";
import type { Database } from "./database.types.ts";

export const client = createClient<Database>(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!,
);
