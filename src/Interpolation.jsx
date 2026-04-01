import Interpolations from "./Interpolationmap";

function Interpolation() {
    const userInfo = {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        isStudent: true
    }
    const user = [
        {
            firstName: "John",
            lastName: "Doe",
            age: 30,
            isStudent: true
        },
        {
            firstName: "lois",
            lastName: "hoe",
            age: 30,
            isStudent: true
        },
        {
            firstName: "matt",
            lastName: "Doe",
            age: 30,
            isStudent: true
        }
    ]
    return (
        <div>
            {/* <h1>Interpolation</h1>
            <p>Interpolation is the process of inserting values into a string. In React, we can use curly braces {} to insert JavaScript expressions into JSX.</p>
            <p>For example, if we have a variable called name, we can insert it into a string like this:</p>
            <p>Hello, {name}!</p>
            <p>This will render as "Hello, [name]!" where [name] is the value of the name variable.</p> */}

            {/* <p>nam: {name}</p> 
            <p>age: {age}</p>
            <p>isStudent: {isStudent.toString()}</p> */}

            {/* <p>userInfoString: {userInfoString}</p> */}

            <p>name: {userInfo.firstName}</p>
            <p>lastName: {userInfo.lastName}</p>
            <p>age: {userInfo.age}</p>
            <p>isStudent: {userInfo.isStudent.toString()}</p>

            <Interpolations array={user} /> 
        </div>
        
    );
}

export default Interpolation;