const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    status: "ok",
    message: "API is working"
  });
});

app.get('/test', (req, res) => {
  res.json([
    { name: "Hotel One", city: "Paris" },
    { name: "Hotel Two", city: "London" }
  ]);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
