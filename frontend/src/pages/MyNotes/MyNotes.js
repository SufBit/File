import React, { useEffect, useState } from 'react'
import { MainScreen } from '../../components/MainScreen'
import { Link} from 'react-router-dom'
import { Badge, Button, Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import axios from 'axios'


export const MyNotes = () => {

    const [ notes, setNotes ] = useState([]) 

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')){
            // Delete note

        }
    }

    const fetchNotes = async () => {
        try{
            const {data} = await axios.get('/api/notes')
            setNotes(data) 
        }
        catch(error){
            if(error.response){
                console.log("Error Response:", error.response.data.message)
                console.error("Status Code:", error.response.status);
                console.error("Headers:", error.response.headers);
            }
            else if(error.request){
                console.error("Error Request:", error.request)
            }
            else{
                console.error('Error:', error.message)
            }
            console.error("Error Config:", error.config)
        }
    };

    console.log(notes)

    useEffect(() => {
        fetchNotes()
      }, []);


  return (
    <MainScreen title="Welcome to Notes..">
        <Link to='createnote'>
            <Button style={{marginLeft: 10, marginBottom: 6}} size='lg'>
                Create a New Note
            </Button>
        </Link>
        {
            notes.map(note => {
                return (
                    <Accordion defaultActiveKey="0" key = {note._id}>
                    <Accordion.Item key = {note._id}>
                    <Card style={{margin:10}}>
                        <Card.Header style={{display:"flex"}}>
                            <span style={{
                                color: "black",
                                textDecoration: "none",
                                flex: 1,
                                cursor: "pointer",
                                alignSelf: "center",
                                fontSize: 18,
                            }}><Accordion.Button as={Card.Text} variant="link" key = {note._id}>
                                {note.title}
                                </Accordion.Button>
                            </span>
                        <div>
                            <Button href={`/note/${note._id}`}>Edit</Button>
                            <Button variant="danger" className="mx-2" onClick={() => deleteHandler(note._id)}>Delete</Button>
                        </div>
                        </Card.Header>
                        <Accordion.Body key = {note._id}>
                        <Card.Body>
                            <h4>
                                <Badge bg="success">
                                    Category - {note.category}
                                </Badge>
                            </h4>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {note.content}
                                </p>
                                <footer className="blockquote-footer">
                                Created on - date
                                </footer>
                            </blockquote>
                        </Card.Body>
                        </Accordion.Body>
                    </Card>
                    </Accordion.Item>
                    </Accordion>
                )
            })

        }
    </MainScreen>
  )
}
