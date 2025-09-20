import React, { useEffect, useState } from 'react'

// you cannot define async functions inside useEffect

const APICalling = () => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(1)

    async function callApi () {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        console.log(await response.json())
        return response 
    }

    useEffect(() => {
        callApi()
        console.log("running on first render..........")
    }, [])

    useEffect(() => {
        console.log("running on every render..........")
    })

    useEffect(() => {
        // infinite loop
        // setCount(count + 100)
        console.log("running on count change..........")
    }, [count])

    useEffect(() => {
        console.log("running on count2 change..........")
    }, [count2])

  return (
    <div>
      <button onClick={() => setCount(count+1)}>hello</button>
      <h1>{count}</h1>

      <button onClick={() => setCount2(count2*10)}>hello</button>
      <h1>{count2}</h1>
    </div>
  )
}

export default APICalling
