global.express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
    // const path = require('path');

const api = require('./routes/api');
const port = 3000;

global.app = express();
app.use(cors())
    // app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

app.use('/api', api);

// app.get('/', (req, res) => {
//     res.send('hai');
// });

app.listen(port, function() {
    console.log("Server running on localhost:'http://localhost:3000'");
});