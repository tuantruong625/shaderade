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

 return (
  <div
    key={index}
    className="h-7 w-7 bg-transparent rounded cursor-pointer relative flex justify-center items-center"
    style={{ backgroundColor: adjust(color, shade) }}
    title={adjust(color, shade)}
    onMouseOver={() => setShowTooltip(true)}
    onMouseLeave={() => setShowTooltip(false)}
    >
      { showTooltip && <ToolTip {...{color, shade}} /> }
  </div>
 )
}

export default ColorSwatch