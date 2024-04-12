import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function FamilMemberDetails({ familyMember, onChangeFamilMemberInputField }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Form.Group
            className="mt-2 mb-3"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>Realtionship</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Relationship To Employee?"
              name="realtionship"
              value={familyMember.realtionship}
              onChange={onChangeFamilMemberInputField}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name?"
              name="fullNameOfFamilyMember"
              value={familyMember.fullNameOfFamilyMember}
              onChange={onChangeFamilMemberInputField}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              placeholder="Date Of Birth?"
              name="dateOfBirthOfFamilyMember"
              value={familyMember.dateOfBirthOfFamilyMember}
              onChange={onChangeFamilMemberInputField}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="number"
              placeholder="Your Mobile Number"
              name="mobileNumberOfFamilyMember"
              value={familyMember.mobileNumberOfFamilyMember}
              onChange={onChangeFamilMemberInputField}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
            <Form.Label>Additional Notes</Form.Label>
            <Form.Control
              type="text"
              placeholder="Additional Notes"
              name="additionalNotes"
              value={familyMember.additionalNotes}
              onChange={onChangeFamilMemberInputField}
            />
          </Form.Group>
        </Card.Body>
      </Card>
    </>
  );
}

export default FamilMemberDetails;
