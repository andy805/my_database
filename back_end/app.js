import { createRequire } from "module";
import { dirname } from "path";
import { fileURLToPath } from "url";

import interviewQuestionsRouter from "./routes/interviewQuestions.router.js";


const require = createRequire(import.meta.url);
const express = require('express');
const cors = require('cors');
const path = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

/* beginning of middleware */
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use('/interviewQuestions', interviewQuestionsRouter);

/* no matter the get request route we send the react application code */
app.get('/*' , (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})


export default app;