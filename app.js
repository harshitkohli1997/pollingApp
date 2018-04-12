const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Static folder
app.use(express.static(path.join(__dirname, 'public')));

port = 8000;

app.listen(port, () => {
    console.log('server started on port 8000');
});
