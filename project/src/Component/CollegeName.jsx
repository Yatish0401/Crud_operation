 import axios from "axios"
 import style from "./college.module.css"
 import { useState } from "react"
import { useNavigate } from "react-router-dom"
const collegename=()=>{

    let [name , setName] = useState("")
    let [branch , setBranch] = useState("")
    let [state , setState] = useState("")
    let navigate = useNavigate()

    let formhandle=()=>{
        let payload = {name , branch , state}
        axios.post("http://localhost:3000/collegename",payload).then((response)=>{
            console.log("got the data");
            console.log(response.data);

        })
        .catch(()=>{
            console.log("something went wrong");
        })
        navigate("/collegestate")
    }



    let nameData=(e)=>{
        setName(e.target.value)
    }
    let branchData=(e)=>{
        setBranch(e.target.value)
    }
    let stateData=(e)=>{
        setState(e.target.value)
    }
    return(
        <div id={style.a1}>
            <section id={style.a2}>
                <h1>College Name</h1>
               
                <label htmlFor="">Name</label>
                <input type="text"  value={name} onChange={nameData} />
                <label htmlFor="">Branch</label>
                <input type="text" value={branch} onChange={branchData}/>
                <label htmlFor="">State</label>
                <input type="text" value={state} onChange={stateData} />
                <button onClick={formhandle}>Submit</button>
              
            </section>
       
        </div>
    )
}
export default collegename