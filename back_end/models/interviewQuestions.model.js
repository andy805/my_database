import { interviewQuestionModel } from "./interviewQuestions.mongo.js";


/* CRUD FUNCTIONS */

export async function getAllInterviewQuestions() {
    const test =  await interviewQuestionModel.find({});
    console.log(test);
    return test;
}

export async function addNewQuestion(interviewQuestion) {


    console.log(interviewQuestion);

    try{
        // instert + update = upsert
        await interviewQuestionModel.updateOne({question: interviewQuestion.question}, {interviewQuestion}, {upsert: true})
    } catch(err) {
        console.log(`could not save interview question. error: ${err}`);
    }

}