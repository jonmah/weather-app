import React from 'react'

import { Container, Label } from './UnitSwitch.styled'
import { Switch } from '../../../components'

const UnitSwitch = ({ handleSetUnits }) => (
  <Container alignItems="center" justifyContent="center">
    <Label>Celsius</Label>
    <Switch handleToggle={handleSetUnits} />
    <Label>Fahrenheit</Label>
  </Container>
)

export default UnitSwitch
