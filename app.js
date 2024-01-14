const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple endpoint
app.get('/api/data', (req, res) => {
  const staticData = {
    message: 'Hello from your Express API!',
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ],
  };

  res.json(staticData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
