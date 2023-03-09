const express = require('express');
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())
const port =5000;

app.get('/', (req, res) => {
    res.json({answer: "Testing"});
});
app.post('/', (req, res) => {
  console.log(req.body);
  res.json({ answer: 'foo' });
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.json())
