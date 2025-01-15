import React, { useEffect} from 'react'
import { MainScreen } from '../../components/MainScreen'
import { Link, useNavigate} from 'react-router-dom'
import { Badge, Button, Card } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { useDispatch, useSelector } from 'react-redux'
import { listNotes } from '../../actions/notesActions'
import {Loading} from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'


export const MyNotes = () => {

    const dispatch = useDispatch();

    const noteList = useSelector(state => state.noteList);
    const { loading, notes, error } = noteList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success:successCreate } = noteCreate;

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure?')){
            // Delete note

        }
    }
    const history = useNavigate();

    useEffect(() => {
        dispatch(listNotes());
        if (!userInfo) {
            history('/');
        }
    }, [dispatch,successCreate, history, userInfo]);


    console.log(userInfo.name);
  return (
    <MainScreen title={`Welcome Back ${userInfo.name} ..`}>
        <Link to='/createnote'>
            <Button style={{marginLeft: 10, marginBottom: 6}} size='lg'>
                Create a New Note
            </Button>
        </Link>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        {
            notes?.map(note => {
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
                                Created on {""}
                                <cite title="Source Title">
                                    {note.createdAt.substring(0, 10)}
                                </cite>
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
