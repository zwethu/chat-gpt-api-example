const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Initial static data
let data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Define an endpoint to get data
app.get('/api/data', (req, res) => {
  res.json({ data });
});

// Define an endpoint to add an item
app.get('/api/data/add', (req, res) => {
  const newItem = { id: data.length + 1, name: `Item ${data.length + 1}` };
  data.push(newItem);
  res.json({ message: 'Item added successfully', newItem });
});

// Define an endpoint to delete an item
app.get('/api/data/delete', (req, res) => {
  if (data.length === 0) {
    return res.json({ message: 'No items to delete' });
  }

  const deletedItem = data.pop();
  res.json({ message: 'Item deleted successfully', deletedItem });
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Handling shutdown gracefully
process.on('SIGINT', () => {
  console.log('\nStopping the server gracefully...');
  server.close(() => {
    console.log('Server has stopped.');
    process.exit(0);
  });
});
