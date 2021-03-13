import React from 'react'

import { HighLow } from '../'
import { Container, Item } from './Forecast.styled'

const Forecast = ({ date, description, icon, main, temp }) => {
  return (
    <Container alignItems="center" justifyContent="space-between" width="100%">
      <Item>{date}</Item>
      <Item flexDirection="column">
        <img src={icon} alt={description} />
        {main}
      </Item>
      <Item>
        <HighLow high={temp.high} low={temp.low} />
      </Item>
    </Container>
  )
}

export default Forecast
