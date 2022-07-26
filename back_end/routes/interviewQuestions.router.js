import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require("express");

import { httpCreateInterviewQuestion, httpGetAllInterviewQuestions, httpUpdateQuestion, httpDeleteQuestion } from "./interviewQuestions.controller.js";

const interviewQuestionsRouter = express.Router();

interviewQuestionsRouter.get('/', httpGetAllInterviewQuestions);
interviewQuestionsRouter.post('/', httpCreateInterviewQuestion);
interviewQuestionsRouter.put('/:questionId', httpUpdateQuestion);
interviewQuestionsRouter.delete('/', httpDeleteQuestion);``

export default interviewQuestionsRouter