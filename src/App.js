import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import ResultComponent from './ResultComponent'
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

function App() {
  const [results, setResults]=useState([])

  const handleSubmit = async () => {
    try{
      const response = await axios.get(`http://localhost:3121/data`);
      setResults(response.data)

    }catch(err){
      console.error(err)
    }
  };
  console.log(results)
  return (
    <>
      <div>
        <button onClick={handleSubmit}>Refresh</button>
      </div>
      <div>
        {results.map(result => 
        <ResultComponent
          name={result.name}
          rank={result.rank}
          decklist={result.decklist}
          record={result.record}
        />
        )}
      </div>
    </>
  );
}

export default App;
