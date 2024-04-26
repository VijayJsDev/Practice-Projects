import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

function Read() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const onEditHandler = (id) => {
    navigate(`/create/${id}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container className="mt-3 mb-3">
        <Card className="text-center p-5">
          <Card.Header>User Detail</Card.Header>
          <Card.Body>
            <h3>Name:{users.name}</h3>
            <strong>Email:{users.email}</strong>
            <br />
            <strong>Phone Number:{users.phone}</strong>
            <br />
            <strong>Date OF Birth:{users.dateOfBirth}</strong>
            <br />
            <strong>Gender: {users.gender}</strong>
            <br />
            <strong>Blood Group: {users.bloodGroup}</strong>
            <br />
            <strong>Pincode: {users.pinCode}</strong>
            <br />
            <strong>
              Residential Address: <span>{users.residentialAddress}</span>
            </strong><br />

            <strong>
              State: {users.state}
            </strong><br />
            <strong>
              City: {users.city}
            </strong><br />

            {/* <Link to={`/update/${id}`}>
              <Button variant="warning">Edit</Button>
            </Link> */}
            <Button onClick={(e) => onEditHandler(id)} variant="warning">
              Edit
            </Button>
            <Link to="..">
              <Button variant="secondary">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Read;
