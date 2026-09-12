import {useEffect, useState} from "react";
import api from "../services/api";
function StudentForm({ editStudent, setEditStudent })//changes
{
    const [student,setStudent]=useState({
        name:"",
        email:"",
        course:""
    }) 
    //Updated code
    useEffect(() => {
        if (editStudent) {
            setStudent(editStudent);
        }
    }, [editStudent]);

    const handleChange=(e)=>{
        setStudent({
            ...student,
            [e.target.name]:e.target.value
        })
    }
//updated and insert
const handleSubmit=async(e)=>{
    e.preventDefault();
    try
    {
        if(student._id)
        {
          await api.put(`students/${student._id}`,student);
          alert("Student updated...")
        }
        else
        {
        await api.post("/students",student);//backend api check
        alert("Student Registered Success!!!")
        }
        setStudent({
            name:"",
            email:"",
            course:""
        })
        setEditStudent(null)
    }catch(error)
    {
        alert("Error")
        console.log(error)
    }
}
return(
    <div className="container mt-4">
          <h2>StudentRegister</h2>
             <h3>
                {student._id ? "Update Student" : "Add Student"}
            </h3>
          <form onSubmit={handleSubmit}>
                 <div className="mb-3">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" value={student.name} onChange={handleChange}
                    required/>
                 </div>
                 <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={student.email} onChange={handleChange}
                    required/>
                 </div>
                 <div className="mb-3">
                    <label>Course</label>
                    <input type="text" className="form-control" name="course" value={student.course} onChange={handleChange}
                    required/>
                 </div>
                 {/* changes */}
                  <button className="btn btn-primary">
                    {student._id ? "Update" : "Save"}
                </button>
                 {/* <button className="btn btn-primary">Register</button> */}
          </form>
    </div>
)
}
export default StudentForm;