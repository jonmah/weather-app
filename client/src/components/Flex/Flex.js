import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
  ${({ alignItems, flexDirection, height, justifyContent, width }) => `
    align-items: ${alignItems};
    flex-direction: ${flexDirection};
    height: ${height};
    justify-content: ${justifyContent};
    width: ${width};
  `}

  > * {
    ${({ flexDirection, gutters }) =>
      ['column', 'column-inverse'].includes(flexDirection)
        ? `margin-bottom: ${gutters}rem;`
        : `margin-right: ${gutters}rem;`}
  }
`
Flex.displayName = 'Flex'

export default Flex
