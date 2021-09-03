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
     <input type="color" name="color" value={color} className="ml-2 p-2 border-none rounded-full h-10 w-10" onChange={onChange} />
    </div>
    {
     shades && shades.map((shade, index) => (
      <div
       key={index}
       className="flex justify-center flex-col rounded-b-lg"
      >
       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill={adjust(color, shade)} d="M34.8,-55.9C45.2,-47.5,53.7,-38,61.5,-26.5C69.2,-15,76.3,-1.5,74,10.2C71.6,21.9,60,31.9,49.8,42.6C39.6,53.2,31,64.6,19.4,69.7C7.8,74.8,-6.7,73.5,-17.3,66.8C-27.9,60.1,-34.6,47.9,-40.3,37.2C-46,26.5,-50.8,17.2,-58.1,4.8C-65.3,-7.6,-75.1,-23.2,-72.7,-35.1C-70.3,-47.1,-55.6,-55.3,-41.4,-62C-27.3,-68.7,-13.6,-73.7,-0.7,-72.6C12.2,-71.5,24.4,-64.3,34.8,-55.9Z" transform="translate(100 100)" />
       </svg>
       <p className="pt-2 uppercase text-lg text-gray-500 p-2 border-2 border-t-0 border-gray-100 rounded-b-lg">{adjust(color, shade)}</p>
      </div>
     ))
    }
   </div>
  </div>
 )
}