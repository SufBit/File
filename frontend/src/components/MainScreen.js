import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainScreen.css'

export const MainScreen = ({title, fontColor = "#000", children}) => {
  return (
    <div className='mainback'>
        <Container>
            <Row>
                <div className='page'>
                    {title && (
                        <>
                            <h1 className="heading" style={{color: fontColor}}>{title}</h1>
                            <hr />
                        </>
                    )}
                    {children}
                </div>
            </Row>
        </Container>

    </div>
  )
}
