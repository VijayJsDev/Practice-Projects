import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

function Create() {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4000/users/${id}`)
        .then((response) =>
          setUser(response.data).catch((error) => console.log(error))
        );
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const request = id
      ? axios.put(`http://localhost:4000/users/${id}`, user)
      : axios.post("http://localhost:4000/users", user);

    request.then((res) => {
      console.log(res);
      setUser(res.data);
      navigate("/");
    });
    setValidated(true);
  };
  console.log(user);
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center">Add New User</h1>
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
    </>
  );
}

export default Create;
