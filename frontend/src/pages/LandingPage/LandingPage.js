import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './LandingPage.css'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LandingPage = () => {

    const navigate = useNavigate()

    useEffect(() => {

        const userInfo = localStorage.getItem('userInfo')
        if(userInfo){
            navigate('/mynotes')
        }    
    }, [navigate]);

  return (
    <div className='main'>
        <Container>
            <Row>
                <div className = "intro-text">
                    <div>
                        <h1 className='title'>Welcome!</h1>
                        <p className='sub-title'>Get Started!</p>
                    </div>
                    <div>
                        <div className='btn-container'>
                            <a href='/login'>
                                <Button size='lg' className='landingbutton'>Login</Button>
                            </a>
                            <a href='/register'>
                                <Button  size='lg' className='landingbutton' variant='warning'>Register</Button>
                            </a>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage