import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class FormLoginp extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({value: e.terget.value})
  }

  handleSubmit(e) {
    // alert('A named was submitted' + this.state.value)
    e.preventDefault()
  }

  render() {
    return (
      <>
      <Modal show={this.props.show} onHide={this.props.handleClose} onSubmit={this.handleSubmit}>
        <Modal.Header>
          <Modal.Title style={{margin:"2px auto"}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                id="email"
                type="email"
                // value={this.state.value}
                onChange={this.handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control 
                id="password"
                type="password"
                // value={this.state.value}
                onChange={this.handleChange}
                rows={3} 
              />
            </Form.Group>
            <Modal.Footer>
              <Button className="w-100" style={{backgroundColor:"orange", border:"none", color:"white"}} type="submit">
                Login
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
          <Form.Label className='m-4 text-center'>Don't have an account? ? <span>Click Here</span></Form.Label>
      </Modal>
    </>
    )
  }
}

export default FormLoginp