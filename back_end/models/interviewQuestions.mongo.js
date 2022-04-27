import {createRequire} from "module";
const require = createRequire(import.meta.url); //create require using ecma script modules

const mongoose = require('mongoose');

const interviewQuestionsSchema = new mongoose.Schema({

    question: String,
    category: String,
    tags: [String],
    type: String,
    url: String,
    website: String,
    company: String,
    question_difficulty: String,
    difficulty_for_user: String,
    status: String,
    flag_delete: Boolean,
    date_created: {type: Date, default: Date.now},
    date_modified: Date,
    time_created: {type: Number, default: Date.now},
    time_modified: Number,
    attempts: [mongoose.Schema.Types.Mixed]

}, {timestamps: {createdAt: 'timestamp_creation', updatedAt: 'timestamp_modified'}});

//connects interviewQuestionsSchema with the 'interviewQuestions' collection
//note that first argument should be in singlar not plural
export const interviewQuestionModel =  mongoose.model('Interview Question', interviewQuestionsSchema); //this is called compiling the model
//we created an object that will now allows us to read and create documents
