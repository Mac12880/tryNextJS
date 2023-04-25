import { useEffect, useState } from "react"

function Counter({ initialCount }){
    const [count, setCount] = useState(initialCount)

    function incrementCount(){
        // passing currCount as function to change count
        setCount(currCount => currCount + 1)
    }

    function decrementCount(){
        setCount(currCount => currCount - 1)
    }
    
    //when count changes it displays count
    useEffect (() => {
        console.log(count)
    }, [count])

    return (
        <div>
            <button className="btn btn-danger" onClick={decrementCount}>-</button>
            <b className="fontSizeLarge">{count}</b>
            <button className="btn btn-success" onClick={incrementCount}>+</button>
        </div>
    )
}
export default Counter