
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Landing from "./pages/Landing"
import { useState } from "react";



function App()
{
    const [user,setuser] = useState(
    [
        {
            username:"faali",
            password:"123"
        }
    ])
    
    return(
<>
<BrowserRouter>


<Routes>
<Route path='/signup' element={<Signup user={user} setuser={setuser}/>}></Route>
<Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
<Route path={'/landing'} element={<Landing/>}></Route>
</Routes>
</BrowserRouter>
</>
)
}
export default App
