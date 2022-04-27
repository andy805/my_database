import { interviewQuestionModel } from "./interviewQuestions.mongo.js";


/* CRUD FUNCTIONS */

export async function getAllInterviewQuestions() {
    const test =  await interviewQuestionModel.find({});
    console.log(test);
    return test;
}

export async function addNewQuestion() {


    const newDocument = new interviewQuestionModel({
        question: 'New Question',
        time_taken: '',
        tags: [],
        website: '',
        url: '',
        answer: '',
        answer_code: '',
        question_difficulty: '',
        difficulty_for_user: '',
        attempts: [],
        flag_delete: 0,
        status: 'New'
        

    });

    let test = await newDocument.save(function (err) {
        if(err){
            console.log('error');
            console.log(err);
            return -1;
        }
    });

    return test;

    



    // try{
    //     // instert + update = upsert
    //     await interviewQuestionModel.updateOne({question: interviewQuestion.question}, {interviewQuestion}, {upsert: true})
    // } catch(err) {
    //     console.log(`could not save interview question. error: ${err}`);
    // }

}

export async function updateQuestion(id, body) {
    console.log(id)
    try{
        const docQuestion = await interviewQuestionModel.findById(String(id));
        docQuestion.question = body.question;
        docQuestion.save().then((err) => {
            if(err) {
                console.log(err)
                return;
            }
        });    
    }
    catch(err) {
        console.log(`could not find question with id: ${id}`);
        return {error: -1, 
                err: err};
    }

    
}