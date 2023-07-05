
import CollegeForm from "./Component/CollegeForm"
import CollegeState from "./Component/CollegeState"
import CollegeName from "./Component/CollegeName"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CollegeEdit from "./Component/CollegeEdit"
const App =()=>{
    return(
        <div>
            <BrowserRouter>
            <CollegeForm/>
            <Routes>
                <Route path="/collegename" element={<CollegeName/>}></Route>
                <Route path="/collegestate" element={<CollegeState/>}></Route>
                <Route path="/collegeedit/:index" element={<CollegeEdit/>}></Route>
            </Routes>
            </BrowserRouter>
           
          
        </div>
    )
}
export default App