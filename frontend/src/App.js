import React, { useState } from 'react';
import DataTable from './components/DataTable';
import UploadForm from './components/UploadForm';
import GenerateData from './components/GernateData';

function App() {
  const [update, setUpdate] = useState(0);

  const handleUpdate = () => {
    setUpdate(prevUpdate => prevUpdate + 1);
  };

  return (
    <div className="App">
      <UploadForm onUpdate={handleUpdate} />
      <hr/>
      <GenerateData onUpdate={handleUpdate} />
      <hr/>
      <DataTable update={update} />
    </div>
  );
}

export default App;
