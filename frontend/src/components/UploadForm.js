import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Alert } from 'react-bootstrap';

const UploadForm = ({ onUpdate }) => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const submitForm = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        axios.post('http://localhost:5000/api/data/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => {
            setSuccess(response.data.message);
            setError(null);  // Clear any previous errors
            onUpdate();  // Call the parent's onUpdate method to refresh the data
        }).catch(error => {
            // Check if the error response from server and set error message
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError('Failed to upload file.');
            }
            setSuccess(null);
        });
    };

    return (
        <Form onSubmit={submitForm}>
            <Form.Group controlId="formFile">
                <Form.Control type="file" name="file" />
            </Form.Group>
            <Button variant="primary" type="submit">Upload</Button>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
        </Form>
    );
}

export default UploadForm;
