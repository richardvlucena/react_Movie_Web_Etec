import React from 'react'
import { Form,  Row,Col,  Button, Spinner} from 'react-bootstrap'
import './register.css';

function register() {
  return (
    <div className='b'>
    <Form style={{ width: '20rem' }}>
    <Row>
      <Col>
        <Form.Control placeholder="First name" />
      </Col>
      <Col>
        <Form.Control placeholder="Last name" />
      </Col>
    </Row>
    <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
     <p></p>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
    <p></p>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </Form>
  </div>
  )
}

export default register