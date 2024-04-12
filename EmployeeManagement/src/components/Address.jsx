import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Address({ heading, address, inputChangeHandler }) {
  //Destructuring  for Value field and onChange events
  return (
    <>
      <Container>
        <h3 className="text-center">{heading}</h3>
        <Row>
          <Form.Group as={Row} md="4" controlId="validationCustom09">
            <Form.Label>Flat / House No. / Floor / Building </Form.Label>
            <Form.Control
              required
              type="text"
              name="houseNo"
              placeholder=""
              value={address.houseNo}
              onChange={inputChangeHandler}
            />
          </Form.Group>
          <Form.Group as={Row} md="4" controlId="validationCustom10">
            <Form.Label>Colony / Street / Locality</Form.Label>
            <Form.Control
              required
              type="text"
              name="street"
              placeholder=""
              value={address.street}
              onChange={inputChangeHandler}
            />
          </Form.Group>
        </Row>

        <Form.Group as={Row} md="4" controlId="validationCustom11">
          <Form.Label>Landmark</Form.Label>
          <Form.Control
            required
            type="text"
            name="landMark"
            placeholder=""
            value={address.landMark}
            onChange={inputChangeHandler}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group
            as={Row}
            md="4"
            controlId="validationCustom12"
            className="mt-3 mb-3"
          >
            <Form.Select
              aria-label="Default select example"
              name="state"
              value={address.state}
              onChange={inputChangeHandler}
            >
              <option value="">Select State</option>
              <option value="tamilnadu">Tamilnadu</option>
              <option value="kerala">Kerala</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Row} md="4" controlId="validationCustom14">
            <Form.Label>PIN Code</Form.Label>
            <Form.Control
              required
              type="number"
              name="pinCode"
              value={address.pinCode}
              onChange={inputChangeHandler}
            />
          </Form.Group>
        </Row>
      </Container>
    </>
  );
}

export default Address;
