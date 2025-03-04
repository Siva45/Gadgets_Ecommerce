
import { useState } from "react"

export default function StateVariable(){      
 
    const [input, setInput] = useState();
    const [view,setView]=useState([])
    const inputValue =(event)=>{
      setInput(event.target.value)
    }
    const Display=()=>{
       setView([...view,input]);      
       setInput([])
    }
   
    function undo(index){
      let del=[...view]
      del.splice(index,1)

      console.log(del,view);
      setView([...del])
      
    }
  //  const add = ()=>setInput(input+1);
   
  //  const decrement = ()=>setInput(input-1);
  //  console.log(input)
     
    return(
        <>

        <section className="  ">
          <h1 className="text-center text-4xl pt-5 font-bold">TODO<span className="text-blue-500">-</span><span className="text-red-500">LIST</span></h1>
        <div className=" mt-24 text-center  grid grid-cols-1 justify-items-center">
          <div className="flex gap-5">
        <input type="text" value={input} onChange={inputValue} className="rounded-full hover:bg-blue" />
        <button onClick={Display} className="bg-green-500 p-2 text-white rounded-full hover:text-black">Add to list</button>
        </div>
        {view.map((item,index)=>
        <div  className="flex  justify-between border-2 mt-5 p-3 w-80 text-wrap  rounded-full " >
        
        <p className=" ">{item}</p>
        <button onClick={ () => {undo(index)}} className="bg-red-500 p-1 rounded-full text-sm text-white">delete</button>
        </div>
        )}
        </div>
        </section>
      
      
        
                {/* <p>{input}</p>
        <button onClick={add}>Increse</button>
        <button onClick={decrement}>Decrese</button> */}
        
        </>
    )
}

// import { useState } from "react";

// export default function HoverDropdown() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex justify-center mt-20">
//       <div onMouseLeave={() => setOpen(false)} className="relative">
//         <button
//           onMouseOver={() => setOpen(true)}
//           className=""
//         >
//           <span className="">Dropdown Button</span>
//         </button>
//         <ul
//           className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
//             open ? "block" : "hidden"
//           }`}
//         >
//           <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
//             Dropdown List 1
//           </li>
//           <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
//             Dropdown List 2
//           </li>
//           <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
//             Dropdown List 3
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }