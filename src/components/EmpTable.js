import axios from 'axios';
import React,{useState}  from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const EmpTable = ({data, getData}) => {


    const [editEmp, setEditEmp] = useState({
        id:"",
        firstName:"",
        lastName:"",
        joiningDate:"",
        salary:"",
        dept:"",
        deptNo:"",
        email:"",
        dob:"",
        phoneNo:""       
      });

    const handleEdit=(id)=>{
        // alert(id);
        axios.get(`https://localhost:7100/api/Employee/${id}`)
        .then((result)=>{
            setEditEmp({...editEmp, 
                id:result.data.id, 
                firstName:result.data.firstName, 
                lastName:result.data.lastName,
                joiningDate:result.data.joiningDate,
                salary:result.data.salary, 
                dept:result.data.dept, 
                deptNo:result.data.deptNo, 
                email:result.data.email, 
                dob:result.data.dob, 
                phoneNo:result.data.phoneNo 
            });
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    const handleUpdate=()=>{
        const url = `https://localhost:7100/api/Employee/${editEmp.id}`;
        const data = {
            "id":editEmp.id,
            "firstName": editEmp.firstName,
            "lastName": editEmp.lastName,
            "joiningDate": editEmp.joiningDate,
            "salary": editEmp.salary,
            "dept": editEmp.dept,
            "deptNo": editEmp.deptNo,
            "email": editEmp.email,
            "dob": editEmp.dob,
            "phoneNo": editEmp.phoneNo
        }

        axios.put(url,data)
        .then((result)=>{
            getData();
            clear();
            toast.success('Employee has been updated');
        }).catch((error) =>{
            toast.success(error);
        })

    }

    const inputEditHandler =(e)=>{
        const name= e.target.name;
        const value=e.target.value;
        // console.log(name, value);
  
        setEditEmp({...editEmp, [name] : value})
        // console.log(editEmp);
    }

    const clear =()=>{

        setEditEmp({
            id:"",
            firstName:"",
            lastName:"",
            joiningDate:"",
            salary:"",
            dept:"",
            deptNo:"",
            email:"",
            dob:"",
            phoneNo:""   
          })
    }

  return (
    <div className='my-3 ' >
        <h1>Employee Table</h1>
        <br/>
        <div className="container">
            <table class="table table-striped" style={{border:"1px solid"}}>
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Joining Date</th>
                <th scope="col">Salary</th>
                <th scope="col">Department</th>
                <th scope="col">Department No.</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                <th scope="col">Phone no.</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody >

               {
                    data && data.length > 0 ? 
                    data.map((item, index)=>{
                        return(
                            <tr key={index}>
                            <th scope="row">{item.id}</th>
                            <td>{index+1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item. joiningDate}</td>
                            <td>{item.salary}</td>
                            <td>{item.dept}</td>
                            <td>{item.deptNo}</td>
                            <td>{item.email}</td>
                            <td>{item.dob}</td>
                            <td>{item.phoneNo}</td>
                            <td>
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => handleEdit(item.id)} data-bs-target="#exampleModal">
                              Edit
                            </button>
                            </td>
                            </tr>
                            
                        )
                    })
                    :
                    'Loading...'
               } 
                
            </tbody>
            </table>

            {/* --------------------------------------------EditModal------------------------------------------------------------------------------------------- */}

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modify Employee Data</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                   <div className="modalForm">
                   <div className="mb-3">
                        <label className="form-label">id</label>
                        <input type="text" value={editEmp.id} name="id" onChange={inputEditHandler} className="form-control" id="editId" placeholder='Enter Id' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> First Name</label>
                        <input type="text" value={editEmp.firstName} name="firstName" onChange={inputEditHandler} className="form-control" id="firstName" placeholder='Enter First Name' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label"> Last Name</label>
                        <input type="text" value={editEmp.lastName} name="lastName" onChange={inputEditHandler} className="form-control" id="lastName" placeholder='Enter Last Name' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Joining Date</label>
                        <input type="date" value={editEmp.joiningDate} name="joiningDate" onChange={inputEditHandler} className="form-control" id="joiningDate" placeholder='Enter joining date' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Salary</label>
                        <input type="text" value={editEmp.salary} name="salary" onChange={inputEditHandler} className="form-control" id="salary" placeholder='Enter salary' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Department</label>
                        <input type="text" value={editEmp.dept} name="dept" onChange={inputEditHandler} className="form-control" id="dept" placeholder='Enter department' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Department No.</label>
                        <input type="text" value={editEmp.deptNo} name="deptNo" onChange={inputEditHandler} className="form-control" id="deptNo" placeholder='Enter department no.' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Id</label>
                        <input type="email" value={editEmp.email} name="email" onChange={inputEditHandler} className="form-control" id="email" placeholder='Enter Email Id' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Date of Birth</label>
                        <input type="date" value={editEmp.dob} name="dob" onChange={inputEditHandler} className="form-control" id="dob" placeholder='Enter Date of Birth' />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone No.</label>
                        <input type="text" value={editEmp.phoneNo} name="phoneNo" onChange={inputEditHandler} className="form-control" id="phoneNo" placeholder='Enter Phone No.' />
                    </div>
                   </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleUpdate()}>Save</button>
            </div>
            </div>
        </div>
        </div>

        </div>
    </div>
  )
}

export default EmpTable