const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form action="/api/" method = "GET">
            <input type="submit" value="GET"> 
        </form>

        <p> GET DATA BY ID </p>
        <form action="/api/id" method = "GET">
            <p><label for="id">ID:</label>
            <input type="text" name="id" id="id"</p>
            <input type="submit" value="GET">
        </form>
        
        <p> INSERT DATA </p>
        <form action="/api/insert" method="POST">
        <p><label for="name">Name:</label>
        <input type="text" name="name" id="name"></p>
        <p><label for="email">Email:</label>
        <input type="text" name="email" id="email"></p>
        <p><label for="phn_no">Phn_Num:</label>
        <input type="text" name="phn_no" id="phn_no"></p>
        <input type="submit" value="ADD">
        </form>

        </body>
        </html>`);
});

app.use("/api", studentRoutes);

app.listen(port, () => console.log(`Server is up on port ${port}`));

        // <p> DELETE DATA BY ID </p>
        // <form action="/api/id" method = "DELETE">
        //     <p><label for="id">ID:</label>
        //     <input type="text" name="id" id="id"</p>
        //     <input type="submit" value="DELETE">
        // </form>