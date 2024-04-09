const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());

const course = require('../CoursePlanetServer/Data/courses.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Course Portal Running...');
});

app.get("/", (req, res) => {
    res.status(200).send("Hello from the server!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening at port ${port}`));