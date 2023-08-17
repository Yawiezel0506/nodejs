import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello to YSW project!");
});


export default route