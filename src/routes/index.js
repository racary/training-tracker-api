import express from "express";
import { getAllNamelyUsers, getNamelyUserByName } from "../controllers";
import { getAllTrainingEnrollmentsForOneUser } from "../controllers";

const router = express.Router();

// Time Log Middleware
router.use((req, res, next) => {
  // console.log(`Time ${Date.now()}`);
  next();
});

router.get("/users/namely", getAllNamelyUsers);

router.get("/users/:name/namely", getNamelyUserByName);

router.get("/trainings/:email", getAllTrainingEnrollmentsForOneUser);

export default router;
