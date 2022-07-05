const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile('${__dirname}/public/index.html');
});
app.get('/game', (req, res) => {
    res.sendFile('${__dirname}/public/game_suit.html');
});
app.listen(1000, () => {
    console.log('Application listening on port 1000!');
});