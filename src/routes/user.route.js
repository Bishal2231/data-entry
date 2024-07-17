import { Router } from "express";
import {authorization}from "../controllers/user.controller.js"
const router=Router()

router.route("/data").post(authorization)

export default router