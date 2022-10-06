const ToolTip = ({ buttonCopy }: { buttonCopy: string}) => {
 return (
  <div className="bg-gray-700 absolute flex justify-center items-center bottom-9 rounded">
   <div className="absolute h-3 w-3 bg-gray-700 -bottom-1 rounded-sm" style={{ transform: 'rotate(45deg)' }} />
   <p className="whitespace-nowrap text-xs p-2 hover:text-blue-200">{ buttonCopy }</p>
  </div>
 )
}

export default ToolTip