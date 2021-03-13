import { useEffect, useState } from 'react'

import {
  ErrorMessage,
  Forecast,
  Forecasts,
  Heading,
  LocationSelector,
  UnitSwitch,
} from './components'
import { getDailyForecast } from './transforms'
import { Container } from './WeatherForecast.styled'

const CELSIUS = 'C'
const FAHRENHEIT = 'F'
const IMPERIAL = 'imperial'
const METRIC = 'metric'

const WeatherForecast = () => {
  const [forecasts, setForecasts] = useState(null)
  const [location, setLocation] = useState('Vancouver')
  const [tempUnit, setTempUnit] = useState(CELSIUS)
  const [units, setUnits] = useState(METRIC)

  useEffect(() => {
    const populateForecast = () => {
      fetch(`/forecast?units=${units}&location=${location}`)
        .then(r => r.json())
        .then(f => setForecasts(f))
    }
    populateForecast()
  }, [location, units])

  const handleSetUnits = () => {
    if (units === METRIC) {
      setUnits(IMPERIAL)
      setTempUnit(FAHRENHEIT)
    } else {
      setUnits(METRIC)
      setTempUnit(CELSIUS)
    }
  }

  const forecastList = forecasts?.list
  const forecastData =
    forecastList &&
    getDailyForecast(
      forecastList,
      tempUnit
    ).map(({ date, description, icon, main, temp }) => (
      <Forecast
        date={date}
        description={description}
        main={main}
        icon={icon}
        key={date}
        temp={temp}
      />
    ))

  return (
    <Container
      alignItems="center"
      flexDirection="column"
      justify-content="center"
    >
      <LocationSelector setLocation={setLocation} />
      {!forecasts || forecasts?.cod === '404' ? (
        <ErrorMessage />
      ) : (
        <>
          <UnitSwitch handleSetUnits={handleSetUnits} />
          <Heading
            location={`${forecasts?.city?.name}, ${forecasts?.city?.country}`}
          />
          <Forecasts>{forecastData}</Forecasts>
        </>
      )}
    </Container>
  )
}

export default WeatherForecast
