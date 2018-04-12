const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const poll = require('./routes/poll');
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Static folder
app.use(express.static(path.join(__dirname, 'public')));

//routes handling
app.use('/poll',poll);
port = 8000;

app.listen(port, () => {
    console.log('server started on port 8000');
});
