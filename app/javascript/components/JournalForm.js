import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // import useNavigate
import { useDropzone } from "react-dropzone";

const JournalForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  // const isLoading = useSelector((state) => state.isLoading);
  // const userId = useSelector((state) => (state.auth.user ? state.auth.user.id : null));
  const userName = useSelector((state) => (state.auth.user ? state.auth.user.username : null));


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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postServices({
      selectedDate: startDate,
      data:
       {
         title, content, image, username: userName,
       },
    }));
    // Reset the form after submission
    setVehicle('');
    setModel('');
    setYear('');
    setColor('');
    setService('');

    navigate('/AddReservationForm'); // redirect to home page after form submission
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5" id="h2">Create New Journal Entry</h1>
      <Form onSubmit={handleSubmit} className="journalform-form">
        <Form.Group controlId="formTitle" className="form-group">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>

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

        <Form.Group controlId="formImage">
          <Form.Label>Image Upload</Form.Label>
          <div {...getRootProps()} className="dropzone p-5 text-center">
            <input {...getInputProps()} />
            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Uploaded Image"
                className="img-fluid"
              />
            ) : (
              <p>Drag 'n' drop an image here, or click to select a file</p>
            )}
          </div>
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleFormSubmit} className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default JournalForm;
