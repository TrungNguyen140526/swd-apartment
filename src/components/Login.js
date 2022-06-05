import React, { useRef, useState } from 'react'
import { Form, Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { authentication } from "../firebase-config"



export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(authentication, provider)
            .then((re) => {
                console.log(re)
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }


    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     try {
    //         setError("")
    //         setLoading(true)
    //         await login(emailRef.current.value, passwordRef.current.value)
    //         navigate("/")
    //     } catch {
    //         setError("Failed to log in")
    //     }

    //     setLoading(false)
    // }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {/* <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-3" type="submit">Log In</Button>
                    </Form> */}
                    <Button onClick={signInWithGoogle} className="w-100 mt-3">Sign In With Google</Button>
                    {/* <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div> */}
                </Card.Body>
            </Card>
            {/* <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div> */}
        </>
    )
}
