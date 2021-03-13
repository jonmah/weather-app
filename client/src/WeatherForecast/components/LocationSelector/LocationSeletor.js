import React, { useRef, useState } from 'react'
import Select from 'react-select'
import csc from 'country-state-city'

import { Container, selectStyles } from './LocationSelector.styled'
import { transformCities, transformCountriesOrStates } from './transforms'

const LocationSelector = ({ setLocation }) => {
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  const stateRef = useRef()
  const cityRef = useRef()

  const countries = transformCountriesOrStates(csc.getAllCountries())
  const states = transformCountriesOrStates(csc.getStatesOfCountry(country))
  const cities = transformCities(csc.getCitiesOfState(country, state))

  const handleSetCountry = e => {
    setCountry(e.value)
    setState('')
    setCity('')
    stateRef.current.state.value = null
    cityRef.current.state.value = null
    setLocation(`${city},${state},${e.value}`)
  }

  const handleSetState = e => {
    setState(e.value)
    setCity('')
    cityRef.current.state.value = null
    setLocation(`${city},${e.value},${country}`)
  }

  const handleSetCity = e => {
    setCity(e.value)
    setLocation(`${e.value},${state},${country}`)
  }

  return (
    <Container flexDirection="column" width="100%">
      Country
      <Select
        options={countries}
        onChange={e => handleSetCountry(e)}
        styles={selectStyles}
        value={countries.find(obj => obj.value === country)}
      />
      State
      <Select
        isDisabled={states?.length === 0}
        options={states}
        onChange={e => handleSetState(e)}
        ref={stateRef}
        styles={selectStyles}
        value={states.find(obj => obj.value === state)}
      />
      City
      <Select
        isDisabled={cities?.length === 0}
        options={cities}
        onChange={e => handleSetCity(e)}
        ref={cityRef}
        styles={selectStyles}
        value={cities.find(obj => obj.value === city)}
      />
    </Container>
  )
}

export default LocationSelector
