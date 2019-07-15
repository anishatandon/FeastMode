const express = require("express")
const cors = require ("cors")
const morgan = require ("morgan")
const fetch = require("node-fetch")
require ("dotenv").config()

const API_URL = 'https://order.dominos.com/power';

const app = express()
app.use(morgan("tiny"))
app.use(cors())



const ezPizzaAPI = require('ez-pizza-api');
const cityRegionOrPostalCode = 'Denver, CO, 80202';
const streetAddress = '1280 Grant St';
let storeResult;
(async () => {
    storeResult = await ezPizzaAPI
    .getNearestDeliveryStore(cityRegionOrPostalCode, streetAddress);
})();





app.get("/dominos", (req, res) => {
    fetch(`${API_URL}/store/${storeResult.StoreId}/menu?lang=en&structured=true`)
        .then(response => response.json())
        .then(json => {
            
            res.json(json)
        })
        .catch(err => {
            res.json(err)
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