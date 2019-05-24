import React, { Component } from "react";
import { Container, Row, Form, Button, FormGroup, Label, Input} from 'reactstrap';
import {
	withRouter
} from 'react-router-dom';



 class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
            firstName: '',
            lastName: '',
            emailInput: '',
            streetInput: '',
            buildingNum: 0,
            flatNum: 0,
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState(
       { [event.target.name]: event.target.value }
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = this.state;
    console.log('A form was submitted: ' + JSON.stringify(formData));
    this.props.makeOrder(formData)
    this.props.history.push('/summary');
  }

  render() {
    const { firstName, lastName, emailInput, streetInput, flatNum } = this.state;
    return (
        <Container >
            <Row className="center-justify">
                <Form className="checkout-form col-sm-6" onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="firstName">Imię</Label>
                        <Input type="text" name="firstName" value={firstName} id="firstName" onChange={this.handleChange} placeholder="Imię" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Nazwisko</Label>
                        <Input type="text" name="lastName" value={lastName}  id="lastName" onChange={this.handleChange} placeholder="Nazwisko" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="emailInput">Email</Label>
                        <Input type="email" name="emailInput" value={emailInput}  id="emailInput" onChange={this.handleChange} placeholder="Twój email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="streetInput">Ulica</Label>
                        <Input type="text" name="streetInput" value={streetInput}  onChange={this.handleChange} id="streetInput" placeholder="Ulica" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="flatNum">Numer Mieszkania</Label>
                        <Input type="number" name="flatNum"  value={flatNum}  onChange={this.handleChange} id="flatNum" placeholder="Numer Mieszkania" />
                    </FormGroup>
                    <Button color="primary" >Potwierdź</Button>
                </Form>
            </Row>    
      </Container>
    )
  }
}

export default withRouter(CheckoutForm);