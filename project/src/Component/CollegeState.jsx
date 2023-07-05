import { useEffect, useState } from "react"
import style from "./college.module.css"
import axios from "axios"
import { Link } from "react-router-dom"
const CollegeState =()=>{
    let [content,setContent]  = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/collegename").then((response)=>{
            console.log("got he data");
              setContent(response.data)
        }).catch(()=>{
            console.log("something went wrong");
        })
    },[])
    let deleteData = (value)=>{
        axios.delete(`http://localhost:3000/collegename/${value}`)
        window.location.assign("/collegestate")
    }
    return(
        <div>
            {content.map((x)=>{
                return(
                    <div id={style.k1}>
                        <section id={style.k2}>
                            <h1>ID : {x.id}</h1>
                            <h1>Name :{x.name}</h1>
                            <h1>Branch :{x.branch}</h1>
                            <h1>State :{x.state}</h1>
                            <button><Link to={`/collegeedit/${x.id}`}>Edit</Link></button>
                            <button onClick={()=>{deleteData(x.id)}}>Delete</button>

                        </section>

                    </div>
                )
            })}
        </div>


      
    )
}
export default CollegeState