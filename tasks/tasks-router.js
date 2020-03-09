const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

// retrieves a list of all tasks
router.get("/", async (req, res, next) => {
	try {
        const tasks = await db("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .select("t.*", "p.name as project_name", "p.description as project_description")
		res.json(tasks)
	} catch(err) {
		next(err)
	}
})

// adds new task
router.post("/", async (req, res, next) => {
	try {
		const [id] = await db("tasks").insert(req.body)
		const task = await db("tasks").where({ id }).first()

		res.status(201).json(task)
	} catch(err) {
		next(err)
	}
})

module.exports = router
