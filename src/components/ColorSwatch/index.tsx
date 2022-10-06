import { useState } from "react"
import { adjust } from "../../helpers"
import ToolTip from "../Tooltip"

export interface ColorSwatchProps {
 color: string;
 shade: number;
 index: number;
}

const ColorSwatch = ({color, shade, index}: ColorSwatchProps): JSX.Element => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [buttonCopy, setButtonCopy] = useState('Copy Hex Code')
  
  const copy = async () => {
    await navigator.clipboard.writeText(adjust(color, shade) as string)
    setButtonCopy('Copied to clipboard!')
  }

 return (
   <div
   key={index}
   className="h-7 w-7 bg-transparent rounded cursor-pointer relative flex justify-center items-center"
   style={{ backgroundColor: adjust(color, shade) }}
   title={adjust(color, shade)}
   onMouseOver={() => setShowTooltip(true)}
    onMouseLeave={() => {
      setShowTooltip(false)
      setButtonCopy('Copy Hex Code')
    }}
    onClick={copy}
   >
      { showTooltip && <ToolTip {...{color, shade, buttonCopy}} /> }
  </div>
 )
}

export default ColorSwatch