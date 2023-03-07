import React from "react";

const DispTable = ({ newRecord }) => {
  return (
    <div>
      {newRecord.length == 0 ? (
        <h2>No records to display.</h2>
      ) : (
        <div className="container my-3 ">
          <h2>Your Search Result</h2>
          <br />
          <table className="table table-striped" style={{ border: "1px solid"}}>
            <thead>
              <tr>
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
              </tr>
            </thead>
            <tbody>
              {newRecord.map((data) => {
                return (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.joiningDate}</td>
                    <td>{data.salary}</td>
                    <td>{data.dept}</td>
                    <td>{data.deptNo}</td>
                    <td>{data.email}</td>
                    <td>{data.dob}</td>
                    <td>{data.phoneNo}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DispTable;
