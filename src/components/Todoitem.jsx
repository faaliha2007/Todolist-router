function Todoitem(props) {
    const activityarr = props.activityarr
    const setactivityarr = props.setactivityarr
   
    function handledelete(deleted)
    {
         var temparr = activityarr.filter(function(item){
            
            if(item.id === deleted)
            {
                return false
            }
            else
            {
                return true
            }

         })
         setactivityarr(temparr)

    }

    return (

        <>

            <div className="flex gap-10 justify-between">
                <p>{props.index + 1}.{props.item.activity}</p>
                <button onClick={()=>{handledelete(props.id)}} className="bg-red-400 text-white border rounded p-1 mb-2">Delete</button>
            </div>
        </>
    )
}
export default Todoitem