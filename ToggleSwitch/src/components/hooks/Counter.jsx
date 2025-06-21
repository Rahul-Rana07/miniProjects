import { useState } from "react"

export const Counter = () =>
{

    const [count ,setCount ] = useState(0);

    return(
        <div style ={{textAlign:"center" }}>
            <h1>Use Hooks States!</h1>
            <br />
            <p>{count}</p>
            <button onClick={ () => setCount(count +1)}>Increment</button>
        </div>
    )
}