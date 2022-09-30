import { TwitterPicker } from "react-color"
import styled from "styled-components"

interface ColorPickerProps {
 color: string;
 handleSetColor: ({ hex }: { hex: string }) => void
}

const Container = styled.div`
 & .twitter-picker {
  background-color: #2C3333 !important;
 }

 & #rc-editable-input-1, #rc-editable-input-2 {
  height: 30px !important;
 }
`

const ColorPicker = ({ color, handleSetColor }: ColorPickerProps) => {
 return (
  <Container>
   <TwitterPicker triangle="hide" color={color} onChange={handleSetColor} />
  </Container>
 )
}

export default ColorPicker