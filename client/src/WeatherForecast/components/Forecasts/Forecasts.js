import React from 'react'

import { Container } from './Forecasts.styled'

const Forecasts = ({ children }) => (
  <Container flexDirection="column" justifyContent="center" width="100%">
    {children}
  </Container>
)

export default Forecasts
