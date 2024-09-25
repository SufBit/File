import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className = "intro-text">
                    <div>
                        <h1 className='title'>Welcome! Take as many notes as you need</h1>
                        <p className='sub-title'>Get Started!</p>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage