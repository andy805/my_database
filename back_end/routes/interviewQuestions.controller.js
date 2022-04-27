import { interviewQuestionModel } from "../models/interviewQuestions.mongo.js";
import { getAllInterviewQuestions,  addNewQuestion, updateQuestion, deleteQuestion} from "../models/interviewQuestions.model.js";

export async function httpGetAllInterviewQuestions(req, res) {

    const allQuestions =  await getAllInterviewQuestions();
    console.log('\n\ntest test \n ');
    console.log(allQuestions);
    return  res.status(200).json(allQuestions);
}

export async function httpCreateInterviewQuestion(req, res) {
    // const question = req.body;
    // if(!question.question){
    //     return res.status(400).json({
    //         error: "missing required interview question properties"
    //     })
    // }

    let result = await addNewQuestion();
    console.log('test');
    console.log(result);
    if(result && result === -1){
        return res.status(400).json({
            error: "failed to create an empty document"
        })

    }

    return res.status(201).json(result);
    // interviewQuestionModel.create(question);

}

export async function httpUpdateQuestion(req, res) {
    console.log(req.params);
    console.log('below is the body');
    console.log(req.body);
    let params = req.params;
    let question = req.body;

    let findResult = await updateQuestion(String(params.questionId), question);
    console.log(findResult);

    if(findResult && findResult.error === -1) {
        return res.status(404).json({
            error: "ID Not Found"
        })
    }
    else {
        return res.status(200).json(findResult);
    }
}

export async function httpDeleteQuestion(req, res) {

    let result = deleteQuestion(req.body._id);
    if(result) {
        return res.status(200).json({
            success: true
        })
    }
    else {
        return res.status(404).json(result)
    }

}