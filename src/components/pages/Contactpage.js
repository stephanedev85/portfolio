import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

import Hero from '../Hero';
import Content from '../Content';



class Contactpage extends React.Component{

    constructor(props){

        super(props);
        this.state ={
            name: "",
            email: "",
            message: "",
            disable: false,
            emailSent: null,
        }
    }

    handleChange = (event) =>{

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name] : value
        })
    }

    handleSubmit = (event) =>{

        event.preventDefault();

        this.setState({
            disabled : true
           
        });
        
        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {

                if(res.data.success){

                    this.setState({
                        disabled:  false,
                        emailSent: true
                    });
                } else {

                    this.setState({
                        disabled:  false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);
                
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
    }


    render(){

        return(
        
       
            <div>
                <Hero title={this.props.title} />
            <Content>
            
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="name">Nom</Form.Label>
                    <Form.Control id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange} maxLength="30" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="email">email</Form.Label>
                    <Form.Control id="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$[\w-]+@([\w-]+\.)+[\w-]+" name="email" type="email" value={this.state.email} onChange={this.handleChange} maxLength="30" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="message">message</Form.Label>
                    <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
                </Form.Group>
                <Button className="d-inline-block" variant="info" type="submit" disabled={this.state.disabled}>
                    Envoyer

                </Button>

                {this.state.emailSent === true && <p className="d-inline success-msg">email envoyé</p>}
                {this.state.emailSent === false && <p className="d-inline alert-msg">email non envoyé</p>}
            </Form>

            </Content>
            </div>
            
        
        );

    } 



};

export default Contactpage;