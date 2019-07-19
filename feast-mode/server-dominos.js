const express = require("express")
const cors = require ("cors")
const morgan = require ("morgan")
const fetch = require("node-fetch")
require ("dotenv").config()

const API_URL = 'https://order.dominos.com/power';

const app = express()
app.use(morgan("tiny"))
app.use(cors())

const cityRegionOrPostalCode = 'Claremont, CA, 91711';
const streetAddress = ''
const orderType = 'Delivery'

app.get("/dominos", (req, res) => {
    fetch(`${API_URL}/store-locator?type=${orderType}&c=${cityRegionOrPostalCode}&s=${streetAddress}`)
        .then(response => response.json())
        .then(json => {
            res.json(json.Stores)
        })
});

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