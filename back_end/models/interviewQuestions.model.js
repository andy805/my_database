import { interviewQuestionModel } from "./interviewQuestions.mongo.js";


/* CRUD FUNCTIONS */

export async function getAllInterviewQuestions() {
    return await interviewQuestionModel.find({});
}

export async function addNewQuestion(interviewQuestion) {


    try{
        // instert + update = upsert
        await interviewQuestionModel.updateOne({question: question}, {interviewQuestion}, {upsert: true})
    } catch(err) {
        console.log(`could not save interview question. error: ${err}`);
    }

}