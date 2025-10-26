import { useState } from "react";
import { BugPlay, Pencil, ClipboardCheck, HeartHandshake, Earth, ChevronLeft, ChevronRight } from "lucide-react";
import "./sideBar.scss";

function SideBar(){
  const [isOpen, setIsOpen] = useState(true);
  const menuJobFilter = [
    {job: "All", icon: Earth},
    {job: "Account", icon: ClipboardCheck},
    {job: "Publisher", icon: Pencil},
    {job: "QA", icon: BugPlay},   
    {job: "RH", icon: HeartHandshake}, 
]

    return(
      <div className="containerMenu">
        <span>Ativar menu</span>
        <div className="containerButtons">

        {menuJobFilter.map((menu, index) => { 
          const IconJob = menu.icon;
          console.log(IconJob);
          return(
            <button className="munuIcons">
                <IconJob size={45} />
                {isOpen &&(
                  <span key={index}>{menu.job}</span>
                )}
              </button>
          )
        })}
        </div>
      </div>
    )
}
/*

<div className="flex flex-col h-full w-64 border p-8 bg-pink-500">
        {menuJobFilter.map((menu, index) => { 
          const IconJob = menu.icon;
          console.log(IconJob);
          return(
            <>
              <button className="bg-pink-500">
                <IconJob size={24} />
                {isOpen &&(
                  <span key={index}>{menu.job}</span>
                )}
              </button>
            </>
          )
        })}
      </div>
*/
export default SideBar;