import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {postServices} from '../redux/casenoteSlice'
// import { useDropzone } from "react-dropzone";

const CasenoteForm = () => {
  const [content, setContent] = useState("");
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate();
  // const onDrop = (acceptedFiles) => {
  //   // Do something with the file object
  //   setImage(acceptedFiles[0]);
  // };

  // const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data (e.g. send it to a server)
    console.log({content});
  };
  const theid = parseInt(params.id);
  const theuser = parseInt(params.user)
  console.log("theform", params)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postServices({
      data:
       {
         content, client_id: theuser, id: theid,
       },
    }));
    // Reset the form after submission
    
    setContent('');

    navigate("/home"); // redirect to home page after form submission
  };
  return (
    <Container className="mt-5 caseform_container">
      <h1 className="text-center mb-5" id="h2">Create New CaseNote Entry</h1>
      <Form onSubmit={handleSubmit} className="journalform-form">

        <Form.Group controlId="formContent" className="form-group">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter content"
            value={content}
            className="form_group_case_input"
            onChange={(event) => setContent(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3 signin_container_form_div1_btns" onClick={handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CasenoteForm;
