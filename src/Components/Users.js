import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InstallButton from "./InstallButton/InstallButton";

function Users() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, name]);
    setName("");
  };
  console.log("users", users);

  return (
    <>
      <InstallButton />
      <Button variant="outline-info" size="sm" href="/field" className="m-2">
        Dynamic field
      </Button>

      <Form onSubmit={handleSubmit} className="m-2">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          ADD
        </Button>
      </Form>
      <ListGroup className="m-5">
        {users.map((user, index) => {
          return (
            <ListGroup.Item key={index}>
              {index + 1}. {user}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}

export default Users;
