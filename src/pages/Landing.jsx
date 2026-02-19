import Header from "../components/Header"
import Card from "../components/Card"
import Todocontainer from "../components/Todocontainer"
import { useLocation } from "react-router-dom"

function Landing() {
    const data = useLocation()
  return (
  <div className="bg-black p-16">
<div className="bg-[#EFEFEF] p-10 border rounded-md">
 {/*header**/}
  <Header name={data.state.user}/>

{/*card*/}
<div className="flex  justify-between gap-7 mt-5 flex-wrap">
  

<Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}/>
<Card bgcolor={"#FD6663"} title={"February"} subtitle={"17:02:26"}/>
<Card bgcolor={"#FCA201"} title={"Built using"} subtitle={"React"}/>




</div>

{/*todo*/}
<Todocontainer/>



</div>

  </div>
  );
}

export default Landing;
