import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send('Hello World');
    });

app.post('/hello', (req, res) => {
    res.send('Hello World');
    });

app.listen(5000, () => {
    console.log('Server is running on http://localhost:3000');
    });