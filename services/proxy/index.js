const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();
app.use(cors());

const authProxy = proxy('http://localhost:9000', {
  proxyReqPathResolver: (req) => {
    return `/api/v1/auth${req.url}`;
  },
});
// const stockProxy = proxy('http://localhost:9001', {
//   proxyReqPathResolver: (req) => {
//     return `/api/v1/stock${req.url}`;
//   },
// });


app.use('/api/v1/auth/', authProxy);
// app.use('/api/v1/stock/', stockProxy);

app.listen(9002, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Proxy service started on port 9002');
});