import { Eye, EyeOff } from 'lucide-react'
import React, { useState } from 'react'

const ShowHidePass = () => {

    const [inputVal, setInputVal] = useState("hello")
    const [isHidden, setIsHidden] = useState("password")
    
    const handleInput = (e) => {
        setInputVal(e.target.value)
    }


    // agar eye ne bola ki main aa rha hu tb mujhe click krne pr eye off call hogi aur password hide hoga
    const showHide = (whichIcon) => {
        if(whichIcon === "eye") setIsHidden("password")
        else setIsHidden("text")
    }

  return (
    <div style={{height: "400px", width: "400px"}}>
      <input type={isHidden} onChange={handleInput} value={inputVal} />

      {/* {a ? "agar a true hai to ye chelga" : "nhi to ye chelga"} */}

        {isHidden === "password" ?  
        <EyeOff style={{cursor: "pointer"}} onClick={() => showHide("eyeOff")} /> 
        : // nhi to
        <Eye style={{cursor: "pointer"}} onClick={() => showHide("eye")} />  
        }

        {/* {isHidden === "password" && <EyeOff style={{cursor: "pointer"}} onClick={() => showHide("eyeOff")} />}
        {isHidden === "text" && <Eye style={{cursor: "pointer"}} onClick={() => showHide("eye")} /> } */}
    </div>
  )
}

export default ShowHidePass
