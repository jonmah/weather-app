import styled from 'styled-components'

import { Flex } from '../components'

export const Container = styled(Flex)`
  align-self: center;
  min-width: ${({ theme }) => theme.breakpoints.mobile};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${({ theme }) => theme.breakpoints.tablet};
  }
`
