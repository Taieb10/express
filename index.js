const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    let hours = new Date().getHours();
    let day = new Date().getDay();

    if (hours <= 9 || hours <= 17 || day == 0 || day == 6) {
        res.sendFile(`${__dirname}/public/views/Home.html`);
    } else {
        res.sendFile(`${__dirname}/public/views/closed.html`);
    }
});

app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/views`));

app.listen(port, function () {
    console.log(
        "The server is running, " +
            " please, open your browser at http://localhost:%s",
        port
    );
});
