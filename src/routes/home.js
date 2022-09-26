import { Router } from "express"
import isAuth from "../middlewares/isAuth"
import { getHome, postHome } from "../controllers/home"

const router = Router()

router.get("/", isAuth, getHome)

router.post("/", postHome)

export default router