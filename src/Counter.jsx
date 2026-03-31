import { useState } from 'react'
import Button from './Button';
function Counter() {


    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
        console.log(count + 1);

    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
            console.log(count - 1);
        }

    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <div style={{ border: "3px solid white", padding: "10px", margin: "10px", color: "white", textAlign: "center", width: "200px" }}>
                <p>Count: {count}</p>
                <Button caculate={increment} text="Increase" />
                <Button caculate={decrement} text="Decrease" />
            </div>
            {/* <button onClick={increment}>increase</button>
                <button onClick={decrement}>Decrease</button> */}


        </div>
    )
}


export default Counter;