import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // import useNavigate
// import { useDropzone } from "react-dropzone";
import { postServices } from '../redux/journalSlice'
const JournalForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState(null);
  const dispatch=useDispatch();
  const navigate= useNavigate();
  // const isLoading = useSelector((state) => state.isLoading);
  // const userId = useSelector((state) => (state.auth.user ? state.auth.user.id : null));
  const id = useSelector((state) => (state.auth.client ? state.auth.client.id : null));
  console.log("passedid", id)

  // const onDrop = (acceptedFiles) => {
  //   // Do something with the file object
  //   setImage(acceptedFiles[0]);
  // };

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g. send it to a server)
    console.log({ title, content, url });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postServices({
      data:
       {
         title, content, url, id: id,
       },
    }));
    // Reset the form after submission
    setTitle('');
    setContent('');
    setUrl('');

    navigate('/journal'); // redirect to home page after form submission
  };

  return (
    <Container className="mt-5 container_journal_form">
      <h1 className="text-center mb-5" id="h2">Create New Journal Entry</h1>
      <Form onSubmit={handleSubmit} className="journalform-form">
        <Form.Group controlId="formTitle" className="form-group">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            className="formcontrol_action"
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
            className="formcontrol_action"
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Image Upload</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter url"
            value={url}
            className="formcontrol_action"
            onChange={(event) => setUrl(event.target.value)}
          />
          {/* <div {...getRootProps()} className="dropzone p-5 text-center">
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
          </div> */}
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleFormSubmit} className="mt-3 signin_container_form_div1_btns">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default JournalForm;
