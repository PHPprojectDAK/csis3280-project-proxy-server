const express = require('express');
const qs = require('qs');
const app = express();

app.get("/google_auth", (req, res) => {
    if (req.query.state == null) {
        res.send('Missing "state" param.');
    } else {
        res.redirect(req.query.state + '?' + qs.stringify(req.query));
    }
});

const port = process.env.PORT || 5000;
app.listen(process.env.PORT || 5000, () => console.log(`App listening on port ${port}!`));

