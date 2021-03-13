import styled from 'styled-components'

import { Flex } from '../../../components'

export const Container = styled(Flex)`
  padding: var(--padding-y) var(--padding-x);
`
Container.displayName = 'Container'

export const Item = styled(Flex)`
  align-items: center;
  justify-content: center;
`
Item.displayName = 'Item'
