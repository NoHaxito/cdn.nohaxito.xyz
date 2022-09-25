import express from "express";
import { handler as ssrHandler } from "./dist/server/entry.mjs";
const port = process.env.port || 3000
const app = express();
app.use(express.static("dist/client/"));
app.use(ssrHandler);

app.listen(port);
