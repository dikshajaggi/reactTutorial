import { useState } from 'react'

function ButtonComponent() {
  // useState is a hook (function) which returns 2 things -> a normal const variable and a function
  // we can decide the names of the var and the function
  // function will help us to update the variable
  // hooks are always used inside functional components

 const [count, setCount] = useState(0)

  const handleInc = () => {
    setCount(count + 1)
  }

  function handleDec () {
    if (count > 0 ) setCount(count - 1)
    else setCount(0)
  }

  return (
   <>
    <button style={{border: "1px solid black"}} onClick={handleInc}>+</button>
    <span> {count} </span>
    <button style={{border: "1px solid black"}} onClick={handleDec}>-</button>
   </>
  )
}

export default ButtonComponent
