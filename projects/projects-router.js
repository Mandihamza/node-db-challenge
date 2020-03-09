const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()


// retrieves a list of projects
router.get("/", async (req, res, next) => {
	try {
		const projects = await db("projects")
		res.json(projects)
	} catch(err) {
		next(err)
	}
})

// adds new project
router.post("/", async (req, res, next) => {
	try {
		const [id] = await db("projects").insert(req.body)
		const project = await db("projects").where({ id }).first()

		res.status(201).json(project)
	} catch(err) {
		next(err)
	}
})

// Extra endpoints (Not MVPs)

// retrieves a project by id
router.get("/:id", async (req, res, next) => {
	try {
        const project = await db("projects")
        .where("id", req.params.id)
        .first()

        if (!project) {
            return res.status(404).json({
                message: "Project not found",
            })
        }

		res.json(project)
	} catch(err) {
		next(err)
	}
})

// retrieves a list of resources needed for a project
router.get("/:id/resources", async (req, res, next) => {
    try {
        const resources = await db("projects_resources as pr")
        .join("projects as p", "p.id", "pr.project_id")
        .join("resources as r", "r.id", "pr.resource_id")
       // .join("tasks as t", "t.project_id", "p.id")
        .where("p.id", req.params.id)
        .select("p.*", "r.name as resource_name", "r.description as resource_description")

        res.json(resources)
    } catch (err) {
        next(err)
    }
})

module.exports = router