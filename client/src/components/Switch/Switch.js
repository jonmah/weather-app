import React from 'react'

import { Button, Input, Label } from './Switch.styled'

const Switch = ({ handleToggle, isOn }) => {
  return (
    <>
      <Input
        checked={isOn}
        data-test-id="switch"
        id="switch"
        onChange={handleToggle}
        type="checkbox"
      />
      <Label htmlFor="switch">
        <Button />
      </Label>
    </>
  )
}

export default Switch
