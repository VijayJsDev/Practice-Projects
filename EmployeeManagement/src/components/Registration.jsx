import { useEffect, useState } from "react";
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
import Address from "./Address";

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

  useEffect(() => {
    if (location.state) {
      setEmployeeData(location.state.data);
    }
  }, []);

  const inputChangeHandler = (e) => {
    const strData = JSON.stringify(employeeData);
    const tempData = JSON.parse(strData);
    tempData[e.target.name] = e.target.value;
    setEmployeeData(tempData);
  };

  // const addressInputChangeHandler = (e) => {
  //   const strData = JSON.stringify(employeeData);
  //   const parseData = JSON.parse(strData);
  //   parseData.residenceAddress[e.target.name] = e.target.value;
  //   setEmployeeData(parseData);
  // };

  const addressInputChangeHandler = (e, key) => {
    const strData = JSON.stringify(employeeData);
    const parseData = JSON.parse(strData);
    parseData[key][e.target.name] = e.target.value;
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

  const removalOfFamilyMember = (index) => {
    const strData = JSON.stringify(employeeData);
    const parseData = JSON.parse(strData);
    const updatedFamilyMembers = parseData.familyMemberDetails.filter(
      (familyMember, i) => i !== index
    );
    setEmployeeData((prevData) => ({
      ...prevData,
      familyMemberDetails: updatedFamilyMembers,
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      if (location.state) {
        dispatch({
          type: "edit",
          payload: { index: location.state.index, data: employeeData },
        });
      } else {
        dispatch({ type: "add", payload: employeeData });
      }
      navigate("/");
    }

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
            <Form.Select
              aria-label="Select Gender"
              name="gender"
              value={employeeData.gender}
              onChange={inputChangeHandler}
            >
              <option value="">Select Gender</option>
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

          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom06"
            className="mt-3 mb-3"
          >
            <Form.Select
              type="text"
              defaultValue="Pick Blood Group"
              placeholder="Blood group"
              name="bloodGroup"
              onChange={inputChangeHandler}
              required
            >
              <option value="">Select Your Blood Group</option>
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

        <Address
          heading="Permanent Address"
          address={employeeData.permanentAddress}
          inputChangeHandler={(e) =>
            addressInputChangeHandler(e, "permanentAddress")
          }
        />
        <Address
          heading="Residence Address"
          address={employeeData.residenceAddress}
          inputChangeHandler={(e) =>
            addressInputChangeHandler(e, "residenceAddress")
          }
        />

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
              removalOfFamilyMember={(e) => removalOfFamilyMember(index)}
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
