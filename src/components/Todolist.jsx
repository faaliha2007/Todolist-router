
import Todoitem from "./Todoitem"
function Todolist(props)
{   
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr

    return(
           <div className="bg-[#BDB4EA] border rounded-md p-2 mt-4 flex-grow">
            <h1 className="text-xl font-medium">Today's Activity</h1>

            {activityarr.length===0?<p>You havent added anything</p>:""}

{
    activityarr.map(function(item,index)
{
    return  <Todoitem id={item.id} item={item} index={index} activityarr={activityarr} setactivityarr={setactivityarr}/>
})
}


            
        </div>
    )
}
export default Todolist