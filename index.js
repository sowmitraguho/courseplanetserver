const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());

const course = require('./Data/courses');
const categories = require('./Data/categories')

app.use(cors());

// app.get('/', (req, res) => {
//   res.send('Course Portal Running...');
// });

app.get("/", (req, res) => {
    res.send("Hello from the server!");
});

app.get('/course', (req, res) => {
    res.send(course);
  } );
app.get('/categories', (req, res) => {
    res.send(categories);
  } );
  
app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(n => n._id == id);
    res.send(selectedCourse);
});
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.filter(n =>  n.category_id == id);
    res.send(selectedCourse);
});





const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening at port ${port}`));