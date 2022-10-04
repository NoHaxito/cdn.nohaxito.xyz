import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import cors from "cors";
import { handler as ssrHandler } from "../dist/server/entry.mjs";
import routes from "./routes/index.js";
const port = process.env.port || 3001;
const app = express();
import "./database.js";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(
  session({
    secret: "JIJIJAJAJA",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
    },
    name: "SESSION",
    store: MongoStore.create({
      mongoUrl:
        "mongodb://uqpane3xxdy11kqrpkiy:t3JgpWYWgiFu3GqdNRAQ@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bphbmwz3zmvo5it?replicaSet=rs0",
    }),
  })
);
app.use(cors());

// app.use(express.static("dist/client/"));
//  app.use(ssrHandler);

app.get("/api/me", async (req, res) => {
  const session = req.session.account.email;
  res.json({ session });
});

app.listen(port, () => {
  console.log(`Uploader.io serving content in: http://localhost:${port}`);
});
