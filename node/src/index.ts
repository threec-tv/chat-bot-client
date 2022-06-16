import express from 'express';

import {commandRouter} from "~/controllers/command/command-router";
import bodyParser from "body-parser";

const app = express();
const port = 8000; // default port to listen

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', commandRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
