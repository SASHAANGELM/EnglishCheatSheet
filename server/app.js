const express = require('express');
const path = require('path');

const { app, http } = require('./setup');
const api = require('./api/api.js');

const port = process.env.PORT || 3000;

app.use('/api', api);

app.use(express.static(path.resolve(__dirname, '../dist/')));

app.get('*', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

http.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
