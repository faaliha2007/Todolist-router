import { useState } from "react"
import { Link } from "react-router-dom"
import Landing from "./Landing"
import { useNavigate } from "react-router-dom"


function Login(props) {
    const navigate = useNavigate()
const [eusername,seteusername] = useState()
const [epassword,setepassword] = useState() 
const [ruser,setruser] = useState(true)   

const user = props.user


function userinput(evt)
{
    seteusername(evt.target.value)
}

function pinput(evt)
{
    setepassword(evt.target.value)
}

var userfound= false
function checkuser(evt)
{   
    user.forEach(function (item)
    {
if(item.username === eusername && item.password === epassword)
   {
     console.log("login successfull")
     userfound = true
     navigate('/landing',{state:{user:eusername}})
   }
 
    })

if(userfound == false)
{
    console.log("login successfull")
    setruser(false)
}

   
}

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium mb-2">Hey Hi! 👋</h1>

{ruser?<p>I help you to manage your activities after your login :) </p> : <p className="text-red-500">Please signup before you Login!!!</p>}


                <div className="flex flex-col gap-2 my-2">
                    <input onChange={userinput} className=" bg-transparent p-1 border rounded-md border-black w-52" type="text" placeholder="username" />
                    <input onChange={pinput} className="bg-transparent p-1 border rounded-md border-black w-52" type="text" placeholder="password" />
                    <button onClick={checkuser} className="bg-yellow-500 border rounded-md w-24 p-1 font-medium">Signup</button>
                    <p>Dont you have an account? <Link className="underline" to={'/signup'}>Signup</Link></p>
                </div>
            </div>

        </div>

    )
}
export default Login