import { Moon, SunMedium } from "lucide-react";
import { useState } from "react";

function ModeToggle(){

    const[color, setColor] = useState("black")

    function ChangeTheme(theme){
        if (theme === "light"){
            setColor("yellow")
        }else
            setColor("black")
    }

    return(
        <div style={{backgroundColor: color}}>
            
            {
                color === "yellow"? 
                <SunMedium style={{cursor:"pointer"}} onClick={() =>ChangeTheme("dark")} />
                : <Moon style={{cursor:"pointer"}} onClick={() => ChangeTheme("light")} />
            }
            
        </div>
    )
}

export default ModeToggle