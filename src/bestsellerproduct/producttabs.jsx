import { Tabs } from "flowbite-react";
import Bestfirst from "./best-first-img";
import Bestsecond from "./best-second-img";

  
export default function Producttab(){
    
    return(
        <>
         <div className="ml-4 pt-10 ">
        <p className="sm:text-3xl text-xl font-bold">Bestseller Products!</p>
      </div>
         <Tabs aria-label="Tabs with icons" variant="underline" className="justify-end">
      <Tabs.Item active title="Audio&Video " >
       <Bestfirst/>
      </Tabs.Item>
      <Tabs.Item title="Gaming">
       <Bestsecond/>
      </Tabs.Item> 
      </Tabs>
        </>
    )
}