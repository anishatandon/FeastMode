const express = require("express")
const cors = require ("cors")
const morgan = require ("morgan")
const fetch = require("node-fetch")
require ("dotenv").config()

const API_URL = 'https://order.dominos.com/power';

const app = express()
app.use(morgan("tiny"))
app.use(cors())

app.get("/dominos", (req, res) => {
    fetch(`${API_URL}/store-locator?type=${req.query.type}&c=${req.query.c}&s=${req.query.s}`)
        .then(response => response.json())
        .then(json => {
            res.json(json.Stores)
        })
})

app.get("/store_menu", (req, res) => {
    fetch(`${API_URL}/store/${req.query.id}/menu?lang=en&structured=true`)
        .then(response => response.json())
        .then(json => {
            res.json(json)
        })
})

app.get("/order", async (req, res) => {
    await fetch(`${API_URL}/${req.query.endpoint}`, {
        method: 'post',
        body: req.query.order,
        headers: { 'content-type': 'application/json; charset=UTF-8' },
    })
        .then(response => response.json())
        .then(json => {
            res.json(json)
        })
})

function notFound(req, res, next) {
    res.status(404)
    const error = new Error("Not Found")
    next(error)
}

function errorHandler(error, req, res, next) {
    res.status(res.statusCode || 500)
    res.json({
        message: error.message
    })
}

app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Listening on port", port)
})