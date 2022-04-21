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
    difficulty: String,
    flag_delete: Boolean,
    date_created: {type: Date, default: Date.now},
    date_modified: Date,
    time_created: {type: Number, default: Date.now.getTime()},
    time_modified: Number
}, {timestamps: {createdAt: 'timestamp_creation', updatedAt: 'timestamp_modified'}})