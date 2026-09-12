import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

function App()
{
  const [editStudent,setEditStudent]=useState(null);//changes
  return(
    <div className="container mt-5">
        <h2>StudentCRUD Application</h2>
        <h4>React Front Connected!!!</h4>
        {/* changes */}
        <StudentForm editStudent={editStudent} setEditStudent={setEditStudent}/>
        <StudentTable setEditStudent={setEditStudent}/>
    </div>
  )
}
export default App;