import Button from "./Button";

function TodoList(props) {

    const inputStyle = {
        padding: "12px",
        width: "250px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        outline: "none"
    };

    const containerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px"
    };

 const deleteTodo = (index) => {
    console.log('helo');
    
    const updatedArray = [...props.todoArray];
    updatedArray.splice(index, 1);
    props.setTodoArray(updatedArray);
}

    return (
        <div style={containerStyle}>
            <ul style={inputStyle}>
                {props.todoArray.map((todo, i) => (
                    <li key={i}>{todo} <Button text="Delete" calculate={() => deleteTodo(i)} /> </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList 