import React, { useEffect } from 'react'
import { MainScreen } from '../../components/MainScreen'
import { Form, Button, Row, Col} from 'react-bootstrap'
import { useState} from 'react'
import './LoginScreen.css'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/userActions'
import { useNavigate } from 'react-router-dom'


const LoginScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();


    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error, userInfo} = userLogin;

    useEffect(() => {
        if (userInfo){
            history('/mynotes')
        }
    }, [history, userInfo]);
   
    const submitHandler = async (e) => {
        e.preventDefault()

        dispatch(login(email, password));
    };
    
    return (
            <MainScreen fontColor = "#FFA500 " title="LOGIN">
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form className='custom-form' onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className = "custom-input" type="email" 
                            value={email}
                            placeholder="Enter email" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control  className = "custom-input" type="password"
                            value={password}
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className = "centered-row pu-3">
                    <Col className="centered-col" >
                        New Customer? <a className="hover-link" href='/register'>Register Here</a>
                    </Col>
                </Row>
            </MainScreen>

        )
    }

    export default LoginScreen