import {Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props)
{  const navigate = useNavigate()
   const user = props.user
   const setuser = props.setuser
   const [eusername,seteusername] = useState()
   const [epassword,setepassword] = useState() 

   function userinput(evt)
{
    seteusername(evt.target.value)
}

function pinput(evt)
{
    setepassword(evt.target.value)
}

function adduser()
{
    setuser([...user,{username:eusername,password:epassword}])
    console.log("joined")
    navigate('/')
}
   return(
   <div className="bg-black p-10">
    <div className="bg-[#EFEFEF] p-10 border rounded-md">
<h1 className="text-3xl font-medium mb-2">Hey Hi! 👋</h1>
<p>You can Signup here :) </p>
<div className="flex flex-col gap-2 my-2">
<input onChange={userinput} className=" bg-transparent p-1 border rounded-md border-black w-52" type="text" placeholder="username"/>
<input onChange={pinput} className="bg-transparent p-1 border rounded-md border-black w-52" type="text" placeholder="password"/>
<input className="bg-transparent p-1 border rounded-md border-black w-52" type="text" placeholder="confirm password"/>
<button onClick={adduser} className="bg-[#8272DA] border rounded-md w-24 p-1 font-medium">Signup</button>
<p>Already have an account? <Link className="underline" to={'/login'}>Login</Link></p>
</div>
    </div>
    
    </div>

   )
}
export default Signup