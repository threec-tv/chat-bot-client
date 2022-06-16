import express from 'express';

import {commdandRouter} from "~/controllers/command/command-router";

const app = express();
const port = 8000; // default port to listen

app.use('/api', commdandRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
