const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3121;
const axios = require('axios').default;
const FormData = require('form-data');
const id = 7147;

const data = {
  draw: 1,
  columns: [
    {
      data: 'Rank',
      name: 'Rank',
      searchable: false,
      orderable: true,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
    {
      data: 'Name',
      name: 'Name',
      searchable: true,
      orderable: true,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
    {
      data: 'Decklists',
      name: 'Decklists',
      searchable: false,
      orderable: false,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
    {
      data: 'Record',
      name: 'Record',
      searchable: false,
      orderable: false,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
    {
      data: 'Points',
      name: 'Points',
      searchable: false,
      orderable: true,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
    {
      data: 'Tiebreaker1',
      name: 'Tiebreaker1',
      searchable: false,
      orderable: true,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
    {
      data: 'Tiebreaker2',
      name: 'Tiebreaker2',
      searchable: false,
      orderable: true,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
    {
      data: 'Tiebreaker3',
      name: 'Tiebreaker3',
      searchable: false,
      orderable: true,
      search: [
        {
          value: '',
          regex: false,
        },
      ],
    },
  ],
  order: [
    {
      column: 0,
      dir: 'asc',
    },
  ],
  start: 0,
  length: 25,
  search: [
    {
      value: '',
      regex: false,
    },
  ],
};

app.use(cors())

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.send('Hello world !!');
});

// app.get('/data', (req, res)=> {
//     axios({
//         method: "post",
//         url: 'https://mtgmelee.com/Tournament/GetPhaseStandings/7800',
//         data: formData,
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             "Content-Type":"multipart/form-data"
//         },
//         responseType:'stream'
//     }).then(function(response){
//         console.log(response.data)
//     })
// })

///// METHODE ASYNC.
app.get('/data', async (req, res) => {
  try {
    const response = await axios({
      method: 'post',
      url: `https://mtgmelee.com/Tournament/GetPhaseStandings/${id}`,
      data,
    });
    const responseData = response.data;

    const players = responseData.data.map((playerData, index) => ({
      rank: index + 1,
      name: playerData.Name,
      record: playerData.Record,
      decklist: playerData.Decklists[0].Name,
    }));

    return res.json(players);
  } catch (e) {
    console.error(e);
  }
});

app.listen(port, () => {
  console.log(`Le serveur est démarré : http://localhost:${port}`);
  if (process.send) {
    process.send('online');
  }
});
