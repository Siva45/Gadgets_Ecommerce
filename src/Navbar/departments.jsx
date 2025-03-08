

import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Dept() {
    const navigate =useNavigate();
 
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="pt-5  grid grid-cols-12 ">
                <div className="col-span-2 pl-3 hidden lg:block">
                    <Dropdown label="All Departments" dismissOnClick={false} className="">
                        <Dropdown.Item><i class="fa-solid fa-headphones pr-2"></i> Headphones</Dropdown.Item>
                        <Dropdown.Item><i class="fa-solid fa-gamepad pr-2"></i>Video Game</Dropdown.Item>
                        <Dropdown.Item><i class="fa-solid fa-camera pr-2"></i>Digital Cameras</Dropdown.Item>
                        <Dropdown.Item><i class="fa-solid fa-computer pr-2"></i>Computer/laptop</Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="nav-menu  lg:col-span-8  md:col-span-12  hidden md:block sm:hidden ">
                    <ul className="flex  gap-10  lg:justify-center md:justify-center ">
                        <li><a href="/" className="text-red-500">Home</a></li>
                        {/* <li><a href="#" className="hover:text-red-500">About</a></li> */}
                        <li className="hover:text-red-500 cursor-pointer" onClick={()=>navigate("/shop")}>Shop</li>
                        <div onMouseLeave={() => setOpen(false)} className="relative z-50">
                            <button onMouseOver={() => setOpen(true)} className="hover:text-red-500 ">Pages</button>
                            <ul className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl bg-white ${open ? "block" : "hidden"}`}>
                                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 ">
                                    Dropdown List 1
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100  ">
                                    Dropdown List 2
                                </li>
                                <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100 ">
                                    Dropdown List 3
                                </li>
                            </ul>
                        </div>

                        <li><a href="#" className="hover:text-red-500">Blog</a></li>
                        <li href="#" className="hover:text-red-500 cursor-pointer"onClick={()=>navigate("/login")}>Contact</li>
                    </ul>
                </div>
                <div className="Helpline   col-span-2 items-end hidden lg:block">
                    <p><i className="fa-solid fa-tty pr-2 text-red-500"></i>CALL US 24/7</p>
                    <p className="text-red-500">9876543210</p>
                </div>
            </div>





        </>
    )
}