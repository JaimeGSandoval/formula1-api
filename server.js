const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = 8000;

app.use(cors());
app.use(express.static('public'));

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
    res.json(drivers[driver]);
  } else {
    res.json(drivers['unknown']);
  }
});

app.listen(process.env.PORT || PORT, () => console.log('Server is running'));
