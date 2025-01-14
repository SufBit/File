import React, { useState } from "react";
import { MainScreen } from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom"; // Updated import for useNavigate

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate(); // Updated for React Router v6

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Check if all fields are filled before dispatching the action
    if (!title || !content || !category) {
      alert("Please fill all fields.");
      return;
    }

    dispatch(createNoteAction(title, content, category));
    
    // Reset the form
    resetHandler();
    
    // Navigate to the /mynotes page after creating the note
    navigate("/mynotes");
  };

  return (
    <MainScreen title="Create a Note">
      <Card>
        <Card.Header>Create a new Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter the title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && typeof content === 'string' ? (
                <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                    {console.log('Content before ReactMarkdown:', content)} {/* Debugging */}
                    <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
                </Card>
            ) : (
                <div>Invalid content type</div> // Fallback message
            )}

            <Form.Group controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <div className="mt-3">
                {loading && <Loading size={50}/>}
                <Button type="submit" variant="primary">
                Create Note
                </Button>
                <Button className="mx-2" onClick={resetHandler} variant="danger">
                Reset Fields
                </Button>
            </div>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateNote;
