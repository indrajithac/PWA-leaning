import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Field() {
  const [list, setList] = useState([{ field: "" }]);
  const [show, setShow] = useState(false);

  const addField = () => {
    setList([...list, { field: "" }]);
  };

  const removeField = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleInputChange = (e, index) => {
    const newList = [...list];
    newList[index][e.target.name] = e.target.value;
    setList(newList);
  };
  console.log("list", list);

  return (
    <div className="m-2 d-flex flex-column justify-content-center align-items-center">
      <img src="assets/logo.png" alt="logo" style={{ width: "20px" }} />
      <Button variant="outline-info" size="sm" href="/" className="m-2">
        Home
      </Button>
      <div>
        <div>
          <Form className="m-2 ">
            {list.map((item, index) => {
              return (
                <div className="d-flex  justify-content-center align-items-center">
                  <Form.Group className="m-2" controlId="name">
                    <Form.Control
                      type="text"
                      name="field"
                      value={item.input}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </Form.Group>
                  {list.length - 1 === index ? (
                    <Button
                      variant="primary"
                      className=""
                      onClick={() => addField()}
                    >
                      +
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      className=""
                      onClick={() => removeField(index)}
                    >
                      -
                    </Button>
                  )}
                </div>
              );
            })}
          </Form>
        </div>
      </div>

      <Button onClick={() => setShow(!show)}>
        {show ? "Hide All" : "Show All"}
      </Button>

      <div>
        <ListGroup>
          {list &&
            show &&
            list.map((el, index) => (
              <ListGroup.Item key={index}>{el.field}</ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </div>
  );
}

export default Field;
