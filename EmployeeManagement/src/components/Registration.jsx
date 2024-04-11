import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import FamilMemberDetails from "./FamilMemberDetails";
import { useDispatch } from "react-redux";

function Registration() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const initialAddress = {
    houseNo: "",
    street: "",
    landMark: "",
    state: "",
    city: "",
    pinCode: "",
  };

  const [employeeData, setEmployeeData] = useState({
    fullName: "",
    gender: "",
    dateOfJoining: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    bloodGroup: "",
    mobileNumber: "",
    email: "",
    residenceAddress: initialAddress,
    permanentAddress: initialAddress,
    familyMemberDetails: [],
  });

  const newFamilyMember = {
    realtionship: "",
    fullNameOfFamilyMember: "",
    dateOfBirthOfFamilyMember: "",
    mobileNumberOfFamilyMember: "",
    additionalNotes: "",
  };

  //   const citiesHandler = (state) => {
  //     const cities = {
  //         "tamilnadu":['chennai', 'kancheepuram', 'chengalpet'],
  //         "kerala":["kochin", "guruvayur", "thriuvanathapuram"]
  //     }
  //     const strData = JSON.stringify(employeeData);
  //     const parseData = JSON.parse(strData);
  //     parseData.residenceAddress[city]
  //   }

  const inputChangeHandler = (e) => {
    const strData = JSON.stringify(employeeData);
    const tempData = JSON.parse(strData);
    tempData[e.target.name] = e.target.value;
    setEmployeeData(tempData);
  };

  const addressInputChangeHandler = (e) => {
    const strData = JSON.stringify(employeeData);
    const parseData = JSON.parse(strData);
    parseData.residenceAddress[e.target.name] = e.target.value;
    setEmployeeData(parseData);
  };

  const permanentAddressInputChangeHandler = (e) => {
    const strData = JSON.stringify(employeeData);
    const parseData = JSON.parse(strData);
    parseData.permanentAddress[e.target.name] = e.target.value;
    setEmployeeData(parseData);
  };

  const onAddFamilyMember = () => {
    const strData = JSON.stringify(employeeData);
    const parseData = JSON.parse(strData);
    parseData.familyMemberDetails.push(newFamilyMember);
    setEmployeeData(parseData);
  };

  const onChangeFamilMemberInputField = (e, index) => {
    const strData = JSON.stringify(employeeData);
    const parseData = JSON.parse(strData);
    parseData.familyMemberDetails[index][e.target.name] = e.target.value;
    setEmployeeData(parseData);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      dispatch({ type: "add", payload: employeeData });
    }
    navigate("/");

    setValidated(true);
  };
  console.log(employeeData);
  return (
    <Container className="mt-3">
      <h1 className="text-center">Register Employee</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              required
              type="text"
              name="fullName"
              placeholder="Full name"
              onChange={inputChangeHandler}
              value={employeeData.fullName}
            />
          </Form.Group>
          <Form.Group className="mt-3 mb-2">
            <Form.Label>Select Gender</Form.Label>
            <Form.Select
              aria-label="Select Gender"
              name="gender"
              value={employeeData.gender}
              onChange={inputChangeHandler}
            >
              <option value=""></option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Date Of Joining</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="date"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              name="dateOfJoining"
              required
              onChange={inputChangeHandler}
              value={employeeData.dateOfJoining}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a Date Of Joining
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Father's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Father Name"
              name="fatherName"
              value={employeeData.fatherName}
              onChange={inputChangeHandler}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Father Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Mother's Name</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="motherName"
              value={employeeData.motherName}
              onChange={inputChangeHandler}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter your Mother Name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dateOfBirth"
              placeholder="Date Of Birth"
              value={employeeData.dateOfBirth}
              onChange={inputChangeHandler}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Date of Birth
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom06">
            <Form.Label>Blood group</Form.Label>
            <Form.Select
              type="text"
              defaultValue="Pick Blood Group"
              placeholder="Blood group"
              name="bloodGroup"
              onChange={inputChangeHandler}
              required
            >
              <option value=""></option>
              <option value="O+ve">O+ve</option>
              <option value="AB-ve">AB-ve</option>
              <option value="B+ve">B+ve</option>
            </Form.Select>

            <Form.Control.Feedback type="invalid">
              Please provide a valid Blood Group.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom07">
            <Form.Label>Current personal mobile number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Phone Number"
              name="mobileNumber"
              value={employeeData.mobileNumber}
              onChange={inputChangeHandler}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Mobile Number
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom08">
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email ID"
              required
              name="email"
              value={employeeData.email}
              onChange={inputChangeHandler}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Container>
          <h3 className="text-center">Residential Address</h3>
          <Row>
            <Form.Group as={Row} md="4" controlId="validationCustom09">
              <Form.Label>Flat / House No. / Floor / Building </Form.Label>
              <Form.Control
                required
                type="text"
                name="houseNo"
                placeholder=""
                value={employeeData.residenceAddress.houseNo}
                onChange={addressInputChangeHandler}
              />
            </Form.Group>
            <Form.Group as={Row} md="4" controlId="validationCustom10">
              <Form.Label>Colony / Street / Locality</Form.Label>
              <Form.Control
                required
                type="text"
                name="street"
                placeholder=""
                value={employeeData.residenceAddress.street}
                onChange={addressInputChangeHandler}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Row} md="4" controlId="validationCustom11">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              required
              type="text"
              name="landMark"
              placeholder=" "
              value={employeeData.residenceAddress.landMark}
              onChange={addressInputChangeHandler}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Row} md="4" controlId="validationCustom12">
              <Form.Label>State</Form.Label>
              <Form.Control
                required
                type="text"
                name="state"
                value={employeeData.residenceAddress.state}
                onChange={addressInputChangeHandler}
              />
            </Form.Group>
          </Row>

          {/* */}

          <Row className="mb-3">
            <Form.Group as={Row} md="4" controlId="validationCustom13">
              <Form.Label>Town/City</Form.Label>
              <Form.Control
                required
                type="text"
                name="city"
                value={employeeData.residenceAddress.city}
                onChange={addressInputChangeHandler}
              />
            </Form.Group>

            <Form.Group as={Row} md="4" controlId="validationCustom14">
              <Form.Label>PIN Code</Form.Label>
              <Form.Control
                required
                type="number"
                name="pinCode"
                value={employeeData.residenceAddress.pinCode}
                onChange={addressInputChangeHandler}
              />
            </Form.Group>
          </Row>
        </Container>

        <Container>
          <h3 className="text-center">Permanent Address</h3>
          <Row>
            <Form.Group as={Row} md="4" controlId="validationCustom09">
              <Form.Label>Flat / House No. / Floor / Building </Form.Label>
              <Form.Control
                required
                type="text"
                name="houseNo"
                placeholder=""
                value={employeeData.permanentAddress.houseNo}
                onChange={permanentAddressInputChangeHandler}
              />
            </Form.Group>
            <Form.Group as={Row} md="4" controlId="validationCustom10">
              <Form.Label>Colony / Street / Locality</Form.Label>
              <Form.Control
                required
                type="text"
                name="street"
                placeholder=""
                value={employeeData.permanentAddress.street}
                onChange={permanentAddressInputChangeHandler}
              />
            </Form.Group>
          </Row>

          <Form.Group as={Row} md="4" controlId="validationCustom11">
            <Form.Label>Landmark</Form.Label>
            <Form.Control
              required
              type="text"
              name="landMark"
              placeholder=" "
              value={employeeData.permanentAddress.landMark}
              onChange={permanentAddressInputChangeHandler}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Row} md="4" controlId="validationCustom12">
              <Form.Label>State</Form.Label>
              <Form.Control
                required
                type="text"
                name="state"
                value={employeeData.permanentAddress.state}
                onChange={permanentAddressInputChangeHandler}
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Row} md="4" controlId="validationCustom13">
              <Form.Label>Town/City</Form.Label>
              <Form.Control
                required
                type="text"
                name="city"
                value={employeeData.permanentAddress.city}
                onChange={permanentAddressInputChangeHandler}
              />
            </Form.Group>

            <Form.Group as={Row} md="4" controlId="validationCustom14">
              <Form.Label>PIN Code</Form.Label>
              <Form.Control
                required
                type="number"
                name="pinCode"
                value={employeeData.permanentAddress.pinCode}
                onChange={permanentAddressInputChangeHandler}
              />
            </Form.Group>
          </Row>
        </Container>

        <Button variant="info" className="mb-3" onClick={onAddFamilyMember}>
          Add Family Member
        </Button>

        {employeeData.familyMemberDetails.map((familyMember, index) => {
          return (
            <FamilMemberDetails
              key={index}
              familyMember={familyMember}
              onChangeFamilMemberInputField={(e) =>
                onChangeFamilMemberInputField(e, index)
              }
            />
          );
        })}

        <br></br>

        <Button type="submit">Submit form</Button>
        <br></br>
        <Link to="..">
          <Button variant="secondary">Back</Button>
        </Link>
      </Form>
    </Container>
  );
}

export default Registration;
