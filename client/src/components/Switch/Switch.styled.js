import styled from 'styled-components'

export const Input = styled.input`
  display: none;

  &:checked + label {
    background: var(--blue);
  }

  &:checked + label span {
    left: calc(100% - 0.1rem);
    transform: translateX(-100%);
  }
`
Input.displayName = 'SwitchInput'

export const Label = styled.label`
  &:active span {
    width: 3.5rem;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  background: var(--yellow);
  border-radius: 2rem;
  position: relative;
  transition: background-color 0.2s;
`
Label.displayName = 'SwitchLabel'

export const Button = styled.span`
  content: '';
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 2rem;
  transition: 0.2s;
  background: var(--white);
  box-shadow: 0 0 0.2rem 0 rgba(10, 10, 10, 0.29);
`
Button.displayName = 'SwitchButton'
