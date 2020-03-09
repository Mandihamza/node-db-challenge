const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the projects api!"
    })
})

router.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something went wrong",
    })
    next(err)
})

module.exports = router