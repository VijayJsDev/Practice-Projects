import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import InputGroup from "react-bootstrap/InputGroup";

function Create() {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const [isError, setIsError] = useState({});
  const [user, setUser] = useState({
    id: uuidv4(),
    name: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    pinCode: "",
    residentialAddress: "",
    state: "",
    city: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:4000/users/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    // if(user.phone.length !==10){
    //   setIsError({phone: 'Invalid Phone Number'})
    // } else{
    //   setIsError({phone: ''})
    // }

    if (form.checkValidity() === true) {
      const request = id
        ? axios.put(`http://localhost:4000/users/${id}`, user)
        : axios.post("http://localhost:4000/users", user);

      request
        .then((res) => {
          console.log(res);
          setUser(res.data);
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
    setValidated(true);
  };
  console.log(user);
  console.log(isError);
  return (
    <>
      <Container className="mt-5">
        <h1 className="text-center">Add New User</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          {/* First Row */}
          <Row xs="1" sm="2" md="3" lg="3">
            <Col xs="6" sm="4" md="4">
              <Form.Group className="mt-3 mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={user.name}
                  onChange={(e) => setUser({ name: e.target.value })}
                  required
                  isInvalid={validated && !user.name}
                />
                <Form.Control.Feedback type="invalid">
                  Name Cannot Be Empty
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs="6" sm="4" md="4">
              <Form.Group className="mt-3 mb-3" controlId="formControlId1">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone Number"
                  value={user.phone}
                  onChange={(e) => {
                    const phone = e.target.value;
                    if (phone.length !== 10) {
                      setIsError({ ...isError, phone: "invalid phone number" });
                    } else {
                      setIsError({ ...isError, phone: "" });
                    }
                    setUser({ ...user, phone: phone });
                  }}
                  required
                  isInvalid={validated && (!user.phone || isError.phone)}
                />
                <Form.Control.Feedback type="invalid">
                  Invalid Phone Number
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col sm="4" md="4">
              <Form.Group className="mt-3 mb-3">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="email"
                    placeholder="example123@gmail.com"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Email Field Cannot Be Empty
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          {/* Second Row */}
          <Row xs="1" sm="2" md="3">
            <Col xs="6" sm="4">
              <Form.Group className="mt-3 mb-3">
                <Form.Label>Date Of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={user.dateOfBirth}
                  onChange={(e) =>
                    setUser({ ...user, dateOfBirth: e.target.value })
                  }
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Date Of Birth Cannot Be Empty
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs="6" sm="4">
              <Form.Group className="mt-3 mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={user.gender}
                  onChange={(e) => {
                    setUser({ ...user, gender: e.target.value });
                  }}
                  required
                  isInvalid={validated && !user.gender}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Pick A Gender.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs="12" sm="4">
              <Form.Group className="mt-3 mb-3">
                <Form.Label>Blood Group</Form.Label>
                <Form.Select
                  value={user.bloodGroup}
                  onChange={(e) => {
                    setUser({ ...user, bloodGroup: e.target.value });
                  }}
                  required
                  isInvalid={validated && !user.bloodGroup}
                >
                  <option value="">Select BloodGroup</option>
                  <option value="o+ve">O+ve</option>
                  <option value="b+ve">B+ve</option>
                  <option value="ab-ve">AB-ve</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Pick A BloodGroup.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          {/* Third Row - Not Row Technically, But Text area */}
          <Row xs="2" sm="2" lg="4" xl="4">
            <Col xs="8" sm="8" md="5" lg="6" xl="6">
              <Form.Group>
                <Form.Label>Residential Address</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter Your Address Here...."
                  value={user.residentialAddress}
                  onChange={(e) => {
                    setUser({ ...user, residentialAddress: e.target.value });
                  }}
                  required
                  isInvalid={validated && !user.residentialAddress}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter A Residential Address
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className="mt-3 mb-3" xs="4" sm="4" md="2" lg="2" xl="2">
              <Form.Group>
                <Form.Label>Pincode</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="pincode"
                  value={user.pinCode}
                  onChange={(e) => {
                    const input = e.target.value;
                    if (input.length <= 6) {
                      setUser({ ...user, pinCode: input });
                    }
                  }}
                  required
                  isInvalid={validated && !user.pinCode}
                />
                <Form.Control.Feedback type="invalid">
                  {!user.pinCode
                    ? "Pincode Cannot Be Empty"
                    : user.pinCode.length !== 6
                    ? "Enter A Valid Pincode"
                    : ""}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col className="mt-3 mb-3" xs="6" sm="6" md="3" lg="2" xl="2">
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Select
                  value={user.state}
                  onChange={(e) => setUser({ ...user, state: e.target.value })}
                  required
                  isInvalid={validated && !user.state}
                >
                  <option value="">Select State</option>
                  <option value="tamilnadu">Tamilnadu</option>
                  <option value="kerala">Kerala</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Pick A State
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col className="mt-3 mb-3" xs="6" md="2" lg="2" xl="2">
              {user.state === "tamilnadu" ? (
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    value={user.city}
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                    required
                    isInvalid={validated && !user.city}
                  >
                    <option value="">Select City</option>
                    <option value="chennai">Chennai</option>
                    <option value="chengalpet">Chengalpet</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Select A City
                  </Form.Control.Feedback>
                </Form.Group>
              ) : (
                ""
              )}

              {user.state === "kerala" ? (
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    value={user.city}
                    onChange={(e) => setUser({ ...user, city: e.target.value })}
                    required
                    isInvalid={validated && !user.city}
                  >
                    <option value="">Select City</option>
                    <option value="thiruvananthapuram">
                      Thiruvananthapuram
                    </option>
                    <option value="kochin">Kochin</option>
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Select A City
                  </Form.Control.Feedback>
                </Form.Group>
              ) : (
                ""
              )}
            </Col>
          </Row>

          {/* Fourth Row */}
          <Row xs="1" sm="1" md="3" lg="4"></Row>
          {/* Fifth Row */}
          <Row></Row>

          <div className="d-flex justify-content-center mt-5">
            <Button variant="success" type="submit">
              Submit
            </Button>
          </div>
        </Form>

        <div className="d-flex justify-content-center mt-2">
          <Link to="/">
            <Button variant="secondary">Return To Home</Button>
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Create;
