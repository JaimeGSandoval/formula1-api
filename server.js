const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

const drivers = {
  'max verstappen': {
    name: 'max verstappen',
    constructor: 'red bull',
    points: 170,
  },
  'sergio perez': {
    name: 'sergio perez',
    constructor: 'red bull',
    points: 117,
  },
  'fernando alonso': {
    name: 'fernando alonso',
    constructor: 'aston martin',
    points: 99,
  },
  'lewis hamilton': {
    name: 'lewis hamilton',
    constructor: 'mercedes',
    points: 87,
  },
  'carlos sainz': {
    name: 'carlos sainz',
    constructor: 'ferrari',
    points: 58,
  },
  unknown: {
    name: 'No data',
    constructor: 'No data',
    points: 'No data',
  },
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/driver/:name', (req, res) => {
  const driver = req.params.name.toLowerCase();
  if (drivers[driver]) {
    res.send(drivers[driver]);
  } else {
    res.send(drivers['unknown']);
  }
});

app.listen(PORT, () => console.log('Server is running'));
