import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const DataTable = ({ update }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [update]);

    const fetchData = () => {
        axios.get("http://localhost:5000/api/data/data")
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
      <div>
      <Table striped bordered hover>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Contact</th>
              </tr>
          </thead>
          <tbody>
              {data.map((row, index) => (
                  <tr key={index}>
                      <td>{row.id}</td>
                      <td>{row.name}</td>
                      <td>{row.contact}</td>
                  </tr>
              ))}
          </tbody>
      </Table>
  </div>
    );
}

export default DataTable;
