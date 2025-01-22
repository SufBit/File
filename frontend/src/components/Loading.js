import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loading = ({size}) => {
  return (
    <div style={{display: "flex", 
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
    }}>
        <Spinner style = {{width:size, height:size}} animation="border" role="status">
            <span className="visually-hidden"></span>
        </Spinner>
    </div>
  )
}
