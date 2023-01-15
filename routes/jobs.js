const {Router} = require("express");
const pool = require("../config/db")

const router = Router()

router.get("/", async (req,res) => {
    const jobs = await pool.query("SELECT * from job");
    req.status(200).json(jobs)
})

module.exports = router