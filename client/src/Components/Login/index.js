import React, { useRef, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { Form, Button, Card, CardGroup, Container } from 'react-bootstrap';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = useCallback(async e => {
       
        e.preventDefault();
        const auth = getAuth()
        await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((data) => console.log(data))

        },[])

    return (
        <div>
            <>
                <Container className=" d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                    <div className="w-100 " style={{ maxWidth: "400px" }}>
                        <Card style={{ padding: '20px' }}>
                            <h2 className="text-center mb-4">Login</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button className="w-100" type="submit">Login</Button>
                            </Form>
                            <Link className="text-align-center" to="/">Home Page</Link>
                        </Card>
                    </div>
                    
                </Container>
            </>
        </div>
    )
}

export default Login;
