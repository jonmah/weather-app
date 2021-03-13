import styled from 'styled-components'

import { Flex } from '../../../components'

export const Container = styled(Flex)`
  padding: var(--padding-y) var(--padding-x);
`
Container.displayName = 'Container'

export const selectStyles = {
  menu: (provided, state) => ({
    ...provided,
    color: 'black',
  }),
}
