const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
const dbUri = 'mongodb+srv://fabian:@Zyq2bcv03@biskit.kldsccb.mongodb.net/?retryWrites=true&w=majority&appName=biskit';
const mangoose = mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use(express.json());

app.get('/', (req, res) => res.send('API is working'));

app.listen(port, () => console.log(`Server running on port ${port}`));