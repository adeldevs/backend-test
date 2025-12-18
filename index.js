const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const productRoutes = require('./routes/product.route');

app.use(cors());
app.use(express.json());

app.use('/api/product', productRoutes);



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




mongoose.connect('mongodb+srv://adeldevs:adel123@cluster0.ncuz71i.mongodb.net/Node-API?appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((e) => {
        console.error('Error connecting to MongoDB', e);
    })