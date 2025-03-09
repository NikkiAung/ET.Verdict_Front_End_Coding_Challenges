import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/AppContext"

function CustomersDisplay() {

    const {data} = useContext(AppContext)
    useEffect(()=>{
        console.log(data)
    },[])
  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

export default CustomersDisplay
