import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    axios.put(`http://localhost:4000/users/${id}`, user).then((res) => {
      console.log(res);
      setUser(res.data);
      navigate("/");
    });
    setValidated(true);
  };

  console.log(user);
  return (
    <Container className="mt-5">
      <h1 className="text-center">Edit User</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mt-3 mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Name Cannot Be Empty
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3 mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Phone Number"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Phone Number Cannot Be Empty
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mt-3 mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="example123@gmail.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email Field Cannot Be Empty
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      <Link to="/">
        <Button variant="secondary">Return To Home</Button>
      </Link>
    </Container>
  );
}

export default Update;
