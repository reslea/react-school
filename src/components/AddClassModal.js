import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddClassModal({ isShow, onHide, onFormSubmit }) {
  const [classTitle, setClassTitle] = useState("");
  function onSubmit() {
    onFormSubmit(classTitle);
  }

  return (
    <Modal show={isShow} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Add new class</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Class name</Form.Label>
            <Form.Control
              type="text"
              placeholder="7A"
              value={classTitle}
              onChange={(e) => setClassTitle(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="primary" onClick={onSubmit}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
