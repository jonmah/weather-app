import React from 'react'

import { Container, High } from './HighLow.styled'

const HighLow = ({ high, low }) => (
  <Container alignItems="center" justifyContent="center">
    <High>{high}</High> / {low}
  </Container>
)

export default HighLow
