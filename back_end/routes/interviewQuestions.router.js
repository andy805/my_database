import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");

import { httpCreateInterviewQuestion, httpGetAllInterviewQuestions, httpUpdateQuestion } from "./interviewQuestions.controller.js";

const interviewQuestionsRouter = express.Router();

interviewQuestionsRouter.get('/', httpGetAllInterviewQuestions);
interviewQuestionsRouter.post('/', httpCreateInterviewQuestion);
interviewQuestionsRouter.put('/:questionId', httpUpdateQuestion);

export default interviewQuestionsRouter