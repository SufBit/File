import React, { useEffect, useState } from 'react'
import { MainScreen } from '../../components/MainScreen'
import { Form, Button, Row, Col } from 'react-bootstrap'
import './RegisterPage.css'
import { register } from '../../actions/userActions'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Loading } from '../../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [pic, setPic] = useState('')
    const [message, setMessage] = useState('')
    const [picMessage, setPicMessage] = useState(null)

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const {loading, error, userInfo} = userRegister;

    const navigate = useNavigate();

    useEffect(() => {
        if (userInfo) {
            navigate("/mynotes");
        }
    }, [userInfo, navigate]);

    const submitHandler = async(e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        }
        else{
            dispatch(register(name, email, password, pic));
        }

        
    // Proceed with the rest of the form submission logic later
    }

    const postDetails = (pics) => {

        if (!pics) {
            return setPicMessage('Please select an image');
        }
        setPicMessage(null)

        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
            const data = new FormData();
            data.append('file', pics);
            data.append('upload_preset', 'Note-Zipper');
            data.append('cloud_name', 'dv4ywkmep');

            fetch('https://api.cloudinary.com/v1_1/dv4ywkmep/image/upload', {
                method: 'post',
                body: data
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPic(data.url.toString());
            })
            .catch((err) => {
                console.log(err);
            });
        }else{
            return setPicMessage('Please select an image');
        }

    }

    return (
        <MainScreen fontColor="#FFA500" title="REGISTER">
            {/*error && <div style={{ color: 'red' }}>{error}</div>*/}
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            {message && <ErrorMessage variant="success">{message}</ErrorMessage>}
            {loading && <Loading />}
            <Form className="custom-form" onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="text"
                        value={name}
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="email"
                        value={email}
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>

                {picMessage && <ErrorMessage variant="danger">{picMessage}</ErrorMessage>}
                <Form.Group className="mb-3" controlId="formProfilePicture">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                        className="custom-input"
                        type="file"
                        onChange= {(e) => postDetails(e.target.files[0])}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <Row className="centered-row pu-3">
                <Col className="centered-col">
                    Already have an account? <a className="hover-link" href="/login">Login Here</a>
                </Col>
            </Row>
        </MainScreen>
    )
}

export default RegisterPage