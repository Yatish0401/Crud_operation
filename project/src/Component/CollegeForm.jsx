import { Link } from "react-router-dom"
import style from "./college.module.css"
const CollegeForm =()=>{
    return(
        <div id={style.nav}>
            <ul>
                <li> <Link to={"/collegename"}>College Name</Link></li>
                <li> <Link to={"/collegestate"}>College State</Link></li>
            </ul>
                 
        </div>
    )


}
export default CollegeForm
