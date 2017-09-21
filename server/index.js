const express = require('express');
const app = express();

app.use(express.static('dist'));
app.set('views', './dist');

app.get('*', function (req, res) {
    res.sendFile(`${process.cwd()}/dist/index.html`);
});

app.listen(process.env.PORT || 8080);