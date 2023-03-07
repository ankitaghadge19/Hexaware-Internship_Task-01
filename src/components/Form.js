import React, {useState} from 'react'
import DispTable from './DispTable';
import './form.css'


const Form = ({data}) => {

    const [records, setRecords] = useState({
        from:"",
        to:"",
        empId:""
      });

    const [newRecord, setNewRecord] = useState([]);

    const inputHandler =(e)=>{
      const name= e.target.name;
      const value=e.target.value;
      // console.log(name, value);

      setRecords({...records, [name] : value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(records);

        if(records.empId != ""){
          const filterData = data.filter( elem => {
            if(elem.id == records.empId){
              return elem;
            }
          });
          setNewRecord(filterData);
        }

        if(records.from != "" && records.to !=""){
          const filterData = data.filter( elem => {
            if(elem.joiningDate >= records.from && elem.joiningDate <= records.to){
              return elem;
            }
          });
          setNewRecord(filterData);
          // console.log(newRecord);
          // console.log(filterData);
         }

        setRecords({
          from:"",
          to:""
        });
 }

       const reset =()=>{
        setNewRecord([]);
      }
    

  return (
    <div className='Container my-3'>
        <br />
        <h2>Search Employees from above Table.</h2>
       <div className="formCont">
        <div className='row justify-content-center'>
                <div className='col-md-10'>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label" style={{fontWeight:"bold", fontSize:"1.5rem"}}>Employee Id</label>
                            <input name="empId" type='text' id="empId" value={records.empId} className='form-control' onChange={inputHandler}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{fontWeight:"bold", fontSize:"1.5rem"}}>From</label>
                            <input name="from" type='date' id="from" value={records.from} className='form-control' onChange={inputHandler}></input>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{fontWeight:"bold", fontSize:"1.5rem"}}>To</label>
                            <input name="to" type='date' id="to" value={records.to} className='form-control' onChange={inputHandler}></input>
                        </div>
                        <button type="submit" className="btn btn-primary" >Search</button>
                        <button type="reset" className="btn btn-primary mx-3" onClick={() => reset()}>Reset</button>
                    </form>
                </div>
            </div>
       </div>
       <br />
       <br />
       <DispTable newRecord={newRecord} />
    </div>
  )
}

export default Form








