import Addtodo from "./Addtodo"
import Todolist from "./Todolist"
import { useState } from "react" 
function Todocontainer()
{   
    const [activityarr,setactivityarr] = useState([{
        id:1,
        activity : "Go for a walk",
    },
    {
        id:2,
        activity : "Drink water"
    },
    ])

    return(
        <>
        <div className="flex gap-5 flex-wrap">
<Addtodo activityarr={activityarr} setactivityarr={setactivityarr}/>
<Todolist activityarr={activityarr} setactivityarr={setactivityarr}/>
     
        </div>
</>
    )
}
export default Todocontainer