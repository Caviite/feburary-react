function Interpolations(props) {
    // console.log(props.array );
    
    return (

        <div >
            {props.array?.map((user, i) => (
                <div key={i} style={{ border: "1px solid black", padding: "10px", margin: "10px", color: "white" }}>
                    <p>name: {user.firstName}</p>
                    <p>lastName: {user.lastName}</p>
                    <p>age: {user.age}</p>  
                    <p>isStudent: {user.isStudent.toString()}</p>
                </div>
            ))}
        
        </div>
    )
}   
   
export default Interpolations;