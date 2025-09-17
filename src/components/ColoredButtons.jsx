import { useState } from "react"

function ColoredButtons(){
    const [color, setColor] = useState(null)

    const colorName = (btnValue) => {
        setColor(btnValue)
    }

    return(
        <>
        <button onClick={() => colorName("red")}>red</button>
        <button onClick={() => colorName("blue")}>blue</button>
        <button onClick={() => colorName("green")}>green</button>
        <button onClick={() => colorName("black")}>black</button>
        <h1>{color}</h1>
        </>
    )
}

export default ColoredButtons