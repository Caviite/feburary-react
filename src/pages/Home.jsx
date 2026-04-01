import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";

function Home() {
  const {name} = useContext(userContext)

  // initial rendering of the Home component
  const [count, setCount] = useState(1);
  useEffect(() => {
    console.log('Home component rendered');
  }, []);

  // state rendering of the Home component
  useEffect(() => {
    console.log('hello use dependency array to monitor');
  }, [count]);

  // unmounted effect with empty array
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('timer', 'unmounted effect with empty array');
    }, 1000);

    return () => {
      clearInterval(timer);
      // console.log('Home component unmounted, interval cleared');
    };

  }, []);

  // unmounted effect without empty array
  useEffect(() => {
    const timer = setInterval(() => {
      console.log('timer', 'unmounted effect without empty array');
    }, 1000);
                  
    return () => {
      clearInterval(timer);
      // console.log('Home component unmounted, interval cleared');
    };

  });


  return (
    <div>
        <h1>Welcome to the Home Page</h1>
        <h1>Name: {name}  </h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>

    </div>
  );
}



export default Home;