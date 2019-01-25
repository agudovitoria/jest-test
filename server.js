const express = require('express');
const cors = require('cors');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');

const UserRoutes = require('./config/routes/UserRoutes');

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
app.listen(port);

app.get('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

UserRoutes.addRoutes(router);


console.log(`RESTful API server started on: ${port}`);