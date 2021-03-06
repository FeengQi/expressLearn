let express = require('express');
let app = express();

app.get('/', (req, res) => res.send('hello world'));

// app.use(express.static('public'));
app.use('/static', express.static('public'));


let server = app.listen(3000, function() {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
