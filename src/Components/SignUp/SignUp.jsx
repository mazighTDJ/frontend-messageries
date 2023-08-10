import { Button, Form } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }


    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const signUp = (e) => {
        axios({
            method: "POST",
            data: {
                username: username,
                email: email,
                password: password
            },
            url: "http://localhost:3002/users/inscription"
        }).then(res => {
            console.log(res.message)
        }).catch(err => {
            console.log(err.message)

        })
    }

    return (
        <div className={"login"}>
            <Form className="form">
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" value={username} onChange={onChangeUsername} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder={"youremail@service"} value={email} onChange={onChangeEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" rows={3} value={password} onChange={onChangePassword} />
                </Form.Group>

                <Form.Group>
                    <Button variant="success" onClick={signUp}>
                        Sign Up
                    </Button>
                </Form.Group>
                <Link to={"/signIn"} >login</Link>

            </Form>
        </div>
    )
}