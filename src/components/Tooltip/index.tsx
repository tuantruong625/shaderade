import { useState } from "react"
import { adjust } from "../../helpers"
import { ColorSwatchProps } from "../ColorSwatch"

const ToolTip = ({ color, shade }: Pick<ColorSwatchProps, 'color' | 'shade'>) => {
 const [buttonCopy, setButtonCopy] = useState('Copy Hex Code')
 
 const copy = async() => {
  await navigator.clipboard.writeText(adjust(color, shade) as string)
  setButtonCopy('Copied to clipboard!')
 }
 return (
  <div className="bg-gray-700 absolute flex justify-center items-center bottom-9 rounded">
   <div className="absolute h-3 w-3 bg-gray-700 -bottom-1 rounded-sm" style={{ transform: 'rotate(45deg)' }} />
   <button className="whitespace-nowrap text-xs p-2 hover:text-blue-200" onClick={copy}>{ buttonCopy }</button>
  </div>
 )
}

export default ToolTip