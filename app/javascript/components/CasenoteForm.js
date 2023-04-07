import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

const CasenoteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Do something with the file object
    setImage(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g. send it to a server)
    console.log({ title, content, image });
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5" id="h2">Create New Journal Entry</h1>
      <Form onSubmit={handleSubmit} className="journalform-form">

        <Form.Group controlId="formContent" className="form-group">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CasenoteForm;
