import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EmployeeList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const count = useSelector((state) => state.employeeList.count);
  const employeeList = useSelector((state) => state);

  const onEdit = (index) => {
    navigate("/registration", {
      state: { index: index, data: employeeList.employeeList[index] },
    });
  };

  const onDelete = (index) => {
    dispatch({ type: "delete", payload: {index} });
  };
  
  //   const countHandler = () => {
    //     dispatch({ type: "add" });
    //   };s
  

    console.log(employeeList);

  return (
    <>
      <h1 className="text-center mt-4">Employee List</h1>
      <div>
        <Link to="/registration">
          <Button className="text-center mt-3">Add Employee</Button>
        </Link>
      </div>
      <Table striped>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Date Of Joining</th>
            <th>Father Name</th>
            <th>Date Of Birth</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.employeeList.length > 0 ? (
            employeeList.employeeList.map((employee, index) => (
              <tr key={index}>
                <td>{employee.fullName}</td>
                <td>{employee.dateOfJoining}</td>
                <td>{employee.fatherName}</td>
                <td>{employee.dateOfBirth}</td>
                <td>
                  {employee ? (
                    <Button variant="warning" onClick={(e) => onEdit(index)}>
                      <Link to="/registration"></Link>Edit
                    </Button>
                  ) : null}
                </td>
                <td>
                  {employee ? (
                    <Button variant="danger" onClick={(e) => onDelete(index)}>
                      Delete
                    </Button>
                  ) : null}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No Record Found</td>
            </tr>
          )}
          {/* Conditional Rendering Logic for the Employee List should be added here.  */}
          {/* Example: employeeList.map((employee, index) => <tr> <td>{employee.fullName}</td> <td>{employee.doj}</td> <td>{employee.fatherName}</td> <td>{employee.dob}</td>  </tr>)  */}
          {/* <tr>
            <td>Alex</td>
            <td>27/03/2024</td>
            <td>Harry</td>
            <td>29/05/1974</td>
          </tr> */}
        </tbody>
        {/* <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </Table>
    </>
  );
}

export default EmployeeList;
