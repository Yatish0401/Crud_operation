import { useEffect, useState } from "react"
import style from "./college.module.css"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const CollegeEdit=()=>{
    let [name,setName] = useState("")
    let [branch , setBranch] = useState("")
    let [state , setState] = useState("")
    let navigate = useNavigate()


    let {index} = useParams()
    console.log(index);
    useEffect(()=>{
        axios.get(`http://localhost:3000/collegename/${index}`).then((response)=>{
            console.log("got the data");
            console.log(response.data);
            setName(response.data.name)
            setBranch(response.data.branch)
            setState(response.data.state)

        }).catch(()=>{
            console.log("something went wrong");
        })
    },[])
  let formhandle=()=>{
    let payload ={name,branch,state}
    axios.put(`http://localhost:3000/collegename/${index}`,payload).then(()=>{
        console.log("got the data");

    }).catch(()=>{
        console.log("did not get the data");
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
export default CollegeEdit