import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

function App() {
  const [tournamentid, setTournamentid] = useState();
  // const axios = require('axios');
  
  let fectchTournamentData = "https://mtgmelee.com/Tournament/GetPhaseStandings/" + tournamentid;
  
  const handleSubmit = () => {
    if(tournamentid){
      axios.get(fectchTournamentData, )
      .then((response)=> {
        console.log(response)
      })
    }
  }
  return (
    <>
      <div>
        <input onChange={(e)=>setTournamentid(e.target.value)} value={tournamentid}></input>
        <button onClick={handleSubmit}></button>
      </div>
    </>
  );
}

export default App;
