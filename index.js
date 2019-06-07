const express = require('express'); //nodejs module has support on common js modules, for server side
const app = express();

app.get('/', (req, res) =>{
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);