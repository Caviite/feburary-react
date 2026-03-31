import { useState } from 'react';
import Button from './Button';
import Todovalue from './Todovalue';

function InputValue() {
  const [value, setValue] = useState();
  const [todoArray, setTodoArray] = useState([]);

      const mainStyle = {
        display: "flex",
        margin: "30px auto",
        gap: "20px",
        padding: "30px"
    }
    const the = {
        marginLeft: "100px"
    }

  // const handleInput = (e) => {
  //   setValue(e.target.value);
  //   // console.log("The input value", value);
  // }

  const displayInput = () => {
    if (value) {
      setTodoArray(() => [...todoArray, value]);
      setValue("");
      // todoArray.push(value)
      console.log(todoArray);
    }
  };

  return (
    <>
      <h1 style={the}>Input value</h1>

        <div style={mainStyle}>
                
            <input
                style={{ border: "thin solid black", width: "30%", padding: "20px" }}
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <Button text="Submit" caculate={displayInput} />
        </div>

        <Todovalue todoArray={todoArray} />
     
    </>
  );
}

export default InputValue;






// import { use, useState } from 'react';
// import Button from './Button';

// function Todo() {
//     const [value, setValue] = useState();
//     // const [newvlue, setNewvalue] = useState()
//     const [todoArray, setTodoArray] = useState([])

//     const mainStyle = {
//         // display: "flex",
//         margin: "30px auto",
//         gap: "20px",
//         padding: "30px"
//     }

//     // const handleInput = (e) => {
//     //     setValue(e.target.value)
//     //     console.log(value);
        
//     // }

//     const displayInput = () => {
        
//         // setNewvalue(value)  
//     }

//     return (
//         <div>
//             <h1>TODO LIST</h1>
//             <div style={mainStyle}>
//                 <input type="text" value={value} onChange={handleInput} />
//                 <Button   text="Add"  caculate={displayInput} />
//             </div>
//             <ul>
//                 <li> {todo} </li>
//             </ul>
//         </div> 
//     )
// }

// export default Todo