import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const GenerateData = ({ onUpdate }) => {

    const generateDataHandler = () => {
        axios.post('http://localhost:5000/api/data/generate')
        .then(response => {
            onUpdate();  // Call the parent's onUpdate method to refresh the data
        })
        .catch(error => {
            console.error(error);
        });
    }

    return (
        <div>
            <Button variant="primary" onClick={generateDataHandler}>Generate Data</Button>
        </div>
    );
}

export default GenerateData;
