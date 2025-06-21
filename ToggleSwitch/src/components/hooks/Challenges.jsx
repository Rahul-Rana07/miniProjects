import { useState } from "react"
import { use } from "react"

export const Challenges =() =>
{
    const [count , setCount] = useState(0);
    const [step , setStep] = useState();

    const handleIncrement = () =>
    {
        setCount(count+1);
        if(step)
        {
            setCount(count+step)
        }
    }

    const handleDecrement = ()=>
    {
        setCount(count-1);
        if(step)
        {
            setCount(count- step)
        }
    }

    return(
        <div>
            <h1>useState Challenge</h1>
            <p>Count:{count}</p>
            <div>
                <label>
                Step:
                    <input
                    type="number"
                    value ={step}
                    onChange = {(e) => setStep(Number(e.target.value))}
                    />
                </label>
            </div>
            <button onClick={handleIncrement}  disabled ={count >= 100}>Increment</button>
            <button onClick={handleDecrement} disabled = { count <= 0}>Decrement</button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </div>
    )
}