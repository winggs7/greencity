const express = require("express");
const path = require('path');
const app = express();

const routers = require('./routers');

const staticFolder = path.join(__dirname, 'static');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get('/', function (request, response) {
    var indexHtml = path.join(staticFolder, 'index.html');
    response.sendFile(indexHtml);
});

console.log('Quan ngu');

app.use('/auth', routers);

app.get('*', function (request, response) {
    var staticFile = path.join(staticFolder, request.originalUrl);

    response.sendFile(staticFile, function (error) {

        if (error instanceof Error)
            response.status(404);
        else {

        }
    });
});

app.listen(3000, () => {
    console.log("Backend already!")
})