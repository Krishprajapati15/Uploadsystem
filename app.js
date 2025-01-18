const express = require('express');
const mainRouter = require('./routes/index');
const db = require('./config/db');
const uploadRouter = require('./routes/upload');

                                                                           
const app = express();
const port = 8000;

app.set('view engine', 'ejs');

app.use('/uploads', express.static('uploads'));
app.use('/public', express.static('public'));

try{
    db.connection.once('open', () => {
        console.log('connected to MongoDB');
    });
} catch (error){
    console.log('Error connecting to MongoDB:', error);
}

app.use('/', mainRouter);
app.use('/upload', uploadRouter);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});