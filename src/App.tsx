import React, { useState } from "react";
import ColorPicker from "./ColorPicker";

export default function App() {
 const [color, setColor] = useState('#0b7285');

 const handleSetColor = ({hex}: {hex: string}) => {
  setColor(hex)
 }

 const adjust = (color: string, amount: number = 0) => {
  return '#' + color.replace(/^#/, '').replace(/../g, color => ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
 }

 const shades = [
  -10,
  5,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100,
  110,
  120,
  130,
  140,
 ]

 return (
  <div className="container mx-auto max-w-6xl px-10 text-gray-300 flex justify-center items-center min-h-screen">
   <div className="bg-gray-800 p-5 rounded">
    <div className="mb-5">
     <h1 className="text-3xl font-medium">Shaderate</h1>
     <p>Generate color shades</p>
    </div>
    <ColorPicker color={color} handleSetColor={handleSetColor} />
    <div className="grid grid-cols-6 gap-1 mt-6 place-items-center">
     {
      shades && shades.map((shade, index) => {
       return (
        <div key={index} className="text-white">
         <div className="h-7 w-7 bg-transparent rounded" style={{ backgroundColor: adjust(color, shade) }} />
        </div>
       )
      })
     }
    </div>
   </div>
  </div>
 )
}