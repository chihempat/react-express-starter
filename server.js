const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req, res) => {
  const customer = [{
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  }, {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe'

    }, {
    id: 3,
    firstName: 'Jack',
    lastName: 'Doe'
    }
  ]
  res.json(customer);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));