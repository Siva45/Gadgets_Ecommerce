import React from 'react'
import Drawer from 'react-modern-drawer'
import { useNavigate } from "react-router-dom";
import 'react-modern-drawer/dist/index.css'
export default function Drawers   () {
        const navigate =useNavigate();
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
           <button onClick={toggleDrawer} ><i className="fa-solid fa-bars bg-red-600 text-white p-1 md:hidden  "></i></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <div className="">
                <button onClick={toggleDrawer} style={{ float: 'right' }} className='p-2'>
                <i class="fa-solid fa-xmark"></i>
                    </button>
                <div  className="md:hidden absolute right-20 top-14 text-black   ">
                    
               <ul className="  text-center ">
               <li className="pb-4 divide-x-4 cursor-pointer hover:text-red-500"onClick={()=>navigate("/")}>Home</li>
               <li className="pb-4 cursor-pointer hover:text-red-500">About</li>
               <li className="pb-4 cursor-pointer hover:text-red-500"onClick={()=>navigate("/shop")}>Shop</li>
               <li className="pb-4 cursor-pointer hover:text-red-500">Pages</li>
               {/* <li className="pb-4 cursor-pointer hover:text-red-500">Blog</li> */}
               <li className="pb-4 cursor-pointer hover:text-red-500"onClick={()=>navigate("/login")}>Contact</li>
            </ul>
              
             </div>
             </div>
            </Drawer>
        </>
    )
}

