const express = require('express');
const studentRoutes = require('./src/student/routes');

const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send('Hello There!!');
});

app.use("/api", studentRoutes);

app.listen(port, () => console.log(`Server is up on port ${port}`));
