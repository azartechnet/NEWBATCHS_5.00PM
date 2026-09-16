import {useEffect,useState} from "react";
import api from "../services/api";
function StudentTable({ setEditStudent })//changes
{
    const [students,setStudents]=useState([]);
    const loadStudents=async()=>{
        const res=await api.get("/students");
        setStudents(res.data);
    }
    useEffect(()=>{
        loadStudents();
    },[])
     const handleDelete = async (id) => {
        await api.delete(`/students/${id}`);
        loadStudents();
    };
    return(
        <div className="container mt-4">
            <h2>StudentList</h2>
            <table className="table table-borderd table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student,index)=>(
                            <tr key={student._id}>
                                <td>{index+1}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.course}</td>
                                {/* changes */}
                                <td>
                                    <button className="btn btn-warning btn-sm" onClick={()=>setEditStudent(student)}>Edit</button>
                                     <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student._id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default StudentTable;