import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Users() {
    const [name, setName] = useState("");
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, name]);
        setName("");
    }
    console.log("users", users);
    return (
        <>
            <Form onSubmit={handleSubmit} className='m-2'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" >
                    ADD
                </Button>
            </Form>
            <ListGroup className='m-5'>
                {users.map((user) => {
                    return (
                        <ListGroup.Item>{user}</ListGroup.Item>
                    )
                })}


            </ListGroup>

        </>

    )
}

export default Users