import axios from 'axios';
import React, {useState, useEffect} from 'react';

import './App.css';
import EmpTable from './components/EmpTable';
import Form from './components/Form';


// const empData =[
//   {
//     id : 1,
//     firstName: 'Steven',
//     lastName:'King',
//     joiningDate: '2019-04-11',
//     salary: '50,000',
//     department: 'System Engineer',
//     deptNo: '10',
//     email: 'steven@gamil.com',
//     dob:'2003-02-07',
//     phoneNo: '2344561780'  
//   },
//   {
//     id : 2,
//     firstName: 'Adriena',
//     lastName:'Doak',
//     joiningDate: '2020-03-25',
//     salary: '80,000',
//     department: 'Product Analyst',
//     deptNo: '20',
//     email: 'adriena@gamil.com',
//     dob:'2008-20-03',
//     phoneNo: '5234453688'  
//   },
//   {
//     id : 3,
//     firstName: 'Rolf',
//     lastName:'Hegdal',
//     joiningDate: '2021-01-20',
//     salary: '75,000',
//     department: 'System Engineer',
//     deptNo: '15',
//     email: 'rolf@gamil.com',
//     dob:'2005-5-08',
//     phoneNo: '2364674478'  
//   },
//   {
//     id : 4,
//     firstName: 'Kent',
//     lastName:'Rosner',
//     joiningDate: '2003-05-10',
//     salary: '25,000',
//     department: 'Scrum Master',
//     deptNo: '5',
//     email: 'kent@gamil.com',
//     dob:'2000-2-18',
//     phoneNo: '4456267838'  
//   },
//   {
//     id : 5,
//     firstName: 'Arsenio',
//     lastName:'Grant',
//     joiningDate: '2000-02-01',
//     salary: '30,000',
//     department: 'Support Engineer',
//     deptNo: '20',
//     email: 'arsenio@gamil.com',
//     dob:'1995-8-05',
//     phoneNo: '6736228178'  
//   },
//   {
//     id : 6,
//     firstName: 'Jones',
//     lastName:'Nick',
//     joiningDate: '2011-09-21',
//     salary: '45,000',
//     department: 'Sales Manager',
//     deptNo: '25',
//     email: 'jones@gamil.com',
//     dob:'2004-9-28',
//     phoneNo: '3434056178'  
//   },
//   {
//     id : 7,
//     firstName: 'Isaac',
//     lastName:'Stefen',
//     joiningDate: '2015-11-01',
//     salary: '90,000',
//     department: 'Business Analyst',
//     deptNo: '15',
//     email: 'isaac@gamil.com',
//     dob:'2009-04-03',
//     phoneNo: '9320456178'  
//   },
//   {
//     id : 8,
//     firstName: 'John',
//     lastName:'Smith',
//     joiningDate: '2005-07-13',
//     salary: '50,000',
//     department: 'Software Testing',
//     deptNo: '5',
//     email: 'john@gamil.com',
//     dob:'1996-5-28',
//     phoneNo: '8489456178'  
//   },
//   {
//     id : 9,
//     firstName: 'King',
//     lastName:'Robert',
//     joiningDate: '2021-05-06',
//     salary: '40,000',
//     department: 'Product Analyst',
//     deptNo: '10',
//     email: 'king@gamil.com',
//     dob:'1999-11-19',
//     phoneNo: '4344456178'  
//   },
//   {
//     id : 10,
//     firstName: 'David',
//     lastName:'Austin',
//     joiningDate: '2022-09-17',
//     salary: '70,000',
//     department: 'Sales Manager',
//     deptNo: '20',
//     email: 'david@gamil.com',
//     dob:'2000-6-13',
//     phoneNo: '8394456178'  
//   },

// ]

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    getData();
  }, [])
  
  const getData = () =>{
    axios.get('https://localhost:7100/api/Employee')
    .then((result) =>{
      setData(result.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  
  return (
    <div className="App">
      <EmpTable data={data} getData={getData} />

      <Form  data={data}/>
     
    </div>
  );
}

export default App;
