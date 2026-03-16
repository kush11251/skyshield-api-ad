const express = require('express');
const app = express();
const port = 3000;

app.use('/users', require('./controllers/users'));
app.use('/metrics', require('./controllers/metrics'));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});