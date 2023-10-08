import React, { useState } from "react";
import {Button, Form} from "react-bootstrap";
import './Login.css'
import {Link} from "react-router-dom";
import axios from "axios";



export default function Login(){
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")


    const onChangeEmail=(e)=>{
        setEmail(e.target.value)
    }

    const onChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const onLogin=(e)=>{

        axios({
            method: "GET",
            url: "http://localhost:3002/users/login?email="+email+"&password="+password
        }).then(res => {
            console.log(res)
            if(res.data.status===true){
                sessionStorage.setItem("_id",res.data._id)
                window.location.replace("/home")
            }else{
                alert(res.data.message)
            }

        }).catch(err => {
            console.error(err.message)

        })

    }

    return (
        <div className={"login"}>
            <Form className="form">

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" value={email} onChange={onChangeEmail} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" rows={3} value={password} onChange={onChangePassword} />
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