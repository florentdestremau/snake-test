import { Database } from "bun:sqlite";

const db = new Database(process.env.DB_PATH || "/storage/snake.db");
db.exec(`
  CREATE TABLE IF NOT EXISTS scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    score INTEGER NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

const getTop10 = db.query("SELECT name, score FROM scores ORDER BY score DESC LIMIT 10");

const html = await Bun.file("./public/index.html").text();

Bun.serve({
  port: 80,
  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname === "/up") {
      return new Response("OK");
    }

    if (url.pathname === "/api/scores") {
      if (req.method === "GET") {
        return Response.json(getTop10.all());
      }
      if (req.method === "POST") {
        const body = await req.json();
        const name = String(body.name ?? "").trim().slice(0, 20) || "Anonymous";
        const score = Math.max(0, Math.floor(Number(body.score) || 0));
        db.run("INSERT INTO scores (name, score) VALUES (?, ?)", [name, score]);
        return Response.json(getTop10.all());
      }
      return new Response("Method Not Allowed", { status: 405 });
    }

    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  },
});

console.log("Snake server running on :80");
