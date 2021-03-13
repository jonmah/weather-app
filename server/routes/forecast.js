var express = require('express')
var router = express.Router()
const fetch = require('node-fetch')

const MAX_FORECAST_DAYS = 5

/* GET 5-day weather forecast. */
router.get('/', async (req, res) => {
  const { location, units } = req.query
  const { OPEN_WEATHER_API_KEY, OPEN_WEATHER_FORECAST_URI } = process.env
  const response = await fetch(
    `${OPEN_WEATHER_FORECAST_URI}?q=${location}&units=${units}&appid=${OPEN_WEATHER_API_KEY}`
  )
  const data = await response.json()
  res.status(response.status).send(data)
})

module.exports = router
