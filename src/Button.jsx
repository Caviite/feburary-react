function Button(props) {
    return (
        <div>
            <button onClick={props.calculate} 
                style={{ backgroundColor: props.backgroundColor, padding: "10px 20px", borderRadius: "5px", border: "none", cursor: "pointer",
                    color: props.color  }}>
                {props.text}
            </button>
        </div>
    )
}

export default Button 