import express from "express";
import { ENV } from "./config/env";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Welcom to Productify API - PERN STACK",
    endpoints: {
      users: "/api/users",
      products: "/api/products",
      comments: "/api/comments",
    },
  });
});

app.listen(ENV.PORT, () => console.log("서버 동작 중 - PORT:3000"));