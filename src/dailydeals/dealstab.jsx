import { Tabs } from "flowbite-react";
import FirstTab from "./firsttab";
import SecondTab from "./secondtab"
import ThirdTab from "./thirdtab";
export default function DealTab(){
    return(
       <>
         <Tabs aria-label="Pills" variant="pills" className=" lg:items-end items-center lg:pt-0 pt-4 ">
      <Tabs.Item active title="Audio&Video" className=" ">
      <div className="md:grid md:grid-cols-2 grid grid-cols-1"><FirstTab />
        </div>  
      </Tabs.Item>
      <Tabs.Item title="Gaming">
      <div className="md:grid md:grid-cols-2 grid grid-cols-1  "><SecondTab/>
      </div>  
      </Tabs.Item>
      <Tabs.Item title="Headphone">
      <div className="md:grid md:grid-cols-2 grid grid-cols-1  "><ThirdTab/>
      </div> 
      </Tabs.Item>
    </Tabs>
  
       </>
    )
}