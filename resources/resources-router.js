const express = require("express")
const db = require("../data/dbConfig")

const router = express.Router()

// retrieves a list of resources
router.get("/", async (req, res, next) => {
	try {
		const resources = await db("resources")
		res.json(resources)
	} catch(err) {
		next(err)
	}
})

// adds new resource
router.post("/", async (req, res, next) => {
	try {
		const [id] = await db("resources").insert(req.body)
		const resource = await db("resources").where({ id }).first()

		res.status(201).json(resource)
	} catch(err) {
		next(err)
	}
})

module.exports = router
