function Todovalue(props) {
    return (
        <>
            <ol style={{margin: "30px", width: "200px", padding: "20px", backgroundColor: "lightgray", color: "black"}}>
                {props.todoArray && props.todoArray.map((todo, i) => (
                    <li key={i}>{todo}</li>
                ))}
            </ol>
        </>
    )
}

export default Todovalue