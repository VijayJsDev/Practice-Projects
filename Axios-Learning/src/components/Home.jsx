import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:4000/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
        console.log(users);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHandler = (id) => {
    const proceed = window.confirm("Are Your Sure To Delete This User?");

    if (proceed) {
      axios
        .delete(`http://localhost:4000/users/${id}`)
        .then((response) => console.log(response.data)).then(() => location.reload()).catch((error) => console.log(error))
      // const updatedUsers = users.filter((user, index) => user.id !== id);
      // setUsers(updatedUsers);
    }
  };

  const onEditHandler = (id) => {
    navigate(`/create/${id}`);
  };

  return (
    <>
      <Container>
        <h1 className="text-center">Users List</h1>
        <div className="d-flex justify-content-end">
          <Link to="/create">
            <Button variant="success">Add User</Button>
          </Link>
        </div>
        <Table responsive>
          <thead>
            <tr>
              
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`read/${user.id}`}>
                    <Button variant="primary">View</Button>
                  </Link>
                  {/* <Link to={`update/${user.id}`}>
                    <Button variant="secondary">Edit</Button>
                  </Link> */}

                  <Button
                    onClick={(e) => onEditHandler(user.id)}
                    variant="secondary"
                  >
                    Edit
                  </Button>

                  <Button
                    onClick={() => deleteHandler(user.id)}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Home;
