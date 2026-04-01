import Button from "./Button"
import Counter from "./Counter"
import Layout from "./Googlelayout"
import Interpolation from "./Interpolation"
import Interpolations from "./Interpolationmap"
import Todo from "./Todo"
import TodoInput from "./Todoinput"
import TodoList from "./Todolist"
import Nav from "./component/Nav"
import ProtectedRoute from "./component/ProtectedRoute"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Profile from "./pages/Profile"
import { Login } from "./pages/Login"
import Singleproduct from "./pages/Singleproduct"
import Register from "./pages/Register"
import Signup from "./pages/Signup"

// …rest of imports…

// import AnalogClock from "../clock"
// import { ReacHookForm } from "./component/Reacthookform"
// import gStyle from "./Googlelayout.css"


function App() {
  // const [todoArray, setTodoArray] = useState([]); 
  //   const TodoArray = (newTodo) => {
  //     setTodoArray([...todoArray, newTodo]);
  //   };



  return (

    <>
      <Nav />
      {/* <AnalogClock /> */}
      {/* <ReacHookForm />       */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Product" element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        } />
        <Route path="Profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />
        <Route path="singleproduct/:id" element={
          <ProtectedRoute>
            <Singleproduct />
          </ProtectedRoute>
        } />
      </Routes>
    </>
    // <>
    //   <Interpolation />
    //   <Counter />
    //   <Button></Button>
    //   <Layout />
    //   <Interpolations />
    //   <Todo />
    // />

    // <>
    //   <h1>Todo App</h1>
    //   <TodoInput addTodo={TodoArray} />  
    //   <TodoList todoArray={todoArray} />
    //   {/* <Button /> */}
    // </>
  )
}

export default App