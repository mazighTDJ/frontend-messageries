import React from "react";
import {Button, Form} from "react-bootstrap";
import './Login.css'
import {Link} from "react-router-dom";



export default function Login(){

    const onLogin=(e)=>{
        return window.location.replace("/home")
    }

    return (
        <div className={"login"}>
            <Form className="form">

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" rows={3} />
                </Form.Group>

                <Form.Group>
                    <Button variant="outline-primary" onClick={onLogin}>
                        Login
                    </Button>
                </Form.Group>
                <Link to={"/signUp"} >Sign in</Link>

            </Form>
        </div>
    )

}