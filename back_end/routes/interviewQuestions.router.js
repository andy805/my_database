import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");

import { httpCreateInterviewQuestion, httpGetAllInterviewQuestions } from "./interviewQuestions.controller.js";

const interviewQuestionsRouter = express.Router();

interviewQuestionsRouter.get('/', httpGetAllInterviewQuestions);
interviewQuestionsRouter.post('/', httpCreateInterviewQuestion);

export default interviewQuestionsRouter