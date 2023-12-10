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

const categoryProxy = proxy('http://localhost:9001', {
  proxyReqPathResolver: (req) => {
    return `/api/v1/category${req.url}`;
  },
});

const itemProxy = proxy('http://localhost:9003', {
  proxyReqPathResolver: (req) => {
    return `/api/v1/item${req.url}`;
  },
});

const orderProxy = proxy('http://localhost:9005', {
  proxyReqPathResolver: (req) => {
    return `/api/v1/order${req.url}`;
  },
});

const supplierProxy = proxy('http://localhost:9007', {
  proxyReqPathResolver: (req) => {
    return `/api/v1/supplier${req.url}`;
  },
});

app.use('/api/v1/auth/', authProxy);
app.use('/api/v1/category/', categoryProxy);
app.use('/api/v1/item/', itemProxy);
app.use('/api/v1/order/', orderProxy);
app.use('/api/v1/supplier/', supplierProxy);

app.listen(9010, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Proxy service started on port 9010');
});