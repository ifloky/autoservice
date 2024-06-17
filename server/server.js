const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Welcome to the Auto Service API');
});

const consultationRequests = require('./routes/consultationRequests');
const appointments = require('./routes/appointments');
const articles = require('./routes/articles');

app.use('/api/consultation-requests', consultationRequests);
app.use('/api/appointments', appointments);
app.use('/api/articles', articles);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
