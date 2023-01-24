import { serve } from "server";
import { Hono } from "hono";

const app = new Hono();
app.get("/", (c) => c.text("It works!"));

serve(app.fetch);
