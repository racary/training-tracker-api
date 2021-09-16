import express from "express";
import { getAllNamelyUsers } from "../controllers";

const router = express.Router();

// Time Log Middleware
router.use((req, res, next) => {
  // console.log(`Time ${Date.now()}`);
  next();
});

router.get("/users/namely", getAllNamelyUsers);

export default router;
