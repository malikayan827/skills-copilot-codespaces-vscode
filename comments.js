// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Proxy Middleware
app.use('/api/comments', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/api/reviews', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/api/products', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/api/related', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/api/qa', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/api/cart', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));

// app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get('/loaderio-2f0b3a1b7f3a0b9e0d5e3c4a9b8c8b9b', (req, res) => res.sendFile(path.join(__dirname, '../public/loaderio-2f0b3a1b7f3a0b9e0d5e3c4a9b8c8b9b.txt')));
app.get('/loaderio-2f0b3a1b7f3a0b9e0d5e3c4a9b8c8b9b', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/loaderio-2f0b3a1b7f3a0b9e0d5e3c4a9b8c8b9b.txt')));

// app.get('/products/:productId', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/products/:productId', (req, res) => res.sendFile(path.join(__dirname, '../client/dist/index.html')));

