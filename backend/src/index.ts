import express from "express";
import cors from "cors";
import { ENV } from "./config/env";
import { clerkMiddleware } from '@clerk/express'

const app = express();

app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(clerkMiddleware());
app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // 데이터 파싱

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

app.listen(ENV.PORT, () => console.log("서버 동작 중 - PORT:3000", ENV.PORT));