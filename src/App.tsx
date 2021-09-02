import React, { useState } from "react";

export default function App() {
 const [color, setColor] = useState<any>('#0b7285');

 const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setColor(e.target.value)
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
  <div className="container mx-auto max-w-6xl m-5 px-10 text-gray-800">
   <h1 className="text-3xl pt-8 pb-1 font-medium">Shaderate</h1>
   <p className="pb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iste recusandae.</p>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div className="col-span-full flex items-center">
     <label htmlFor="color" className="flex flex-col md:w-1/4 w-100 pb-5">
      Enter color
      <input type="text" name="color" value={color} placeholder="#e2e2e2" className="p-2 border" onChange={onChange} />
     </label>
     <input type="color" name="color" value={color}  className="ml-2 p-2 border-none rounded-full h-10 w-10"  onChange={onChange} />
    </div>
    {
     shades && shades.map((shade, index) => (
      <div
       key={index}
       className="flex justify-center flex-col p-2 border-2 border-gray-100 shadow-md rounded-md"
      >
       <div className="py-16 bg-red-100" style={{ backgroundColor: adjust(color, shade) }}></div>
       <p className="pt-2 uppercase text-lg text-gray-500">{adjust(color, shade)}</p>
      </div>
     ))
    }
   </div>
  </div>
 )
}