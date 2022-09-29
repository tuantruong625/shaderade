import { useState } from "react";
import ColorPicker from "./components/ColorPicker/index";
import { adjust, shades } from "./helpers";

export default function App() {
 const [color, setColor] = useState('#0b7285');

 const handleSetColor = ({hex}: {hex: string}) => {
  setColor(hex)
 }

 return (
  <div className="container mx-auto max-w-6xl px-10 text-gray-300 flex justify-center items-center min-h-screen">
   <div className="bg-gray-800 p-5 rounded">
    <div className="mb-5">
     <h1 className="text-3xl font-medium">Shaderade</h1>
     <p>Generate color shades</p>
    </div>
    <ColorPicker color={color} handleSetColor={handleSetColor} />
    <div className="grid grid-cols-6 gap-1 mt-6 place-items-center">
     {
      shades && shades.map((shade, index) => {
       return (
        <div key={index}>
         <div className="h-7 w-7 bg-transparent rounded" style={{ backgroundColor: adjust(color, shade) }} title={adjust(color, shade)} />
         
        </div>
       )
      })
     }
    </div>
   </div>
  </div>
 )
}