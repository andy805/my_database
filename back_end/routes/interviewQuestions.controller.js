import { interviewQuestionModel } from "../models/interviewQuestions.mongo.js";
import { getAllInterviewQuestions,  addNewQuestion} from "../models/interviewQuestions.model.js";

export async function httpGetAllInterviewQuestions(req, res) {
    return res.status(200).json(getAllInterviewQuestions());
}

export async function httpCreateInterviewQuestion(req, res) {
    const question = req.body;
    if(!question.question){
        return res.status(400).json({
            error: "missing required interview question properties"
        })
    }

    addNewQuestion(question);
    // interviewQuestionModel.create(question);

    return res.status(201).json(question);
}