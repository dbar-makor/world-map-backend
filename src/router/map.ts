import express from "express";

import {
  getCountriesData,
} from "../controller/map";

const router = express.Router();

router.get("/", getCountriesData);

export default router;