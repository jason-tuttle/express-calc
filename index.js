const express = require('express');
const app = express();

app.get('/add/:a/:b', function(req, res) {
  res.send("Answer: " + (Number(req.params.a) + Number(req.params.b)));
});

app.listen(3000, function() {
  console.log("Started express-calc");
});
