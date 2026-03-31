import  { useState } from "react";
import Button from "./Button";

function TodoInput(props) {
    const [value, setValue] = useState("");

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100px"
  };

  const inputStyle = {
    padding: "12px",
    width: "250px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none"
  };

    const displayInput = () => {
        // console.log('gfghfhfh');
        
        props.addTodo(value);
        setValue("");
    }

    return (
        <div style={containerStyle}>
            <input style={inputStyle} type="text" placeholder="Enter todo item" value={value} onChange={(e) => setValue(e.target.value)} />
            <Button  text="Submit" calculate={displayInput} backgroundColor="#007bff" />       
        </div>
    )
}

export default TodoInput;