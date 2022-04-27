import { TextField, Button, ButtonGroup} from "@mui/material";
import React, { useState, useEffect } from "react";

/******
 * 
 */

// import MasterDetail from "../components/MasterDetail";
import MasterDetailRow from "../components/MasterDetailRow";
import Card from "../components/UI/Card";
import style from './InterviewQuestions.module.css';

const url = "http://localhost:3002/interviewQuestions"

const InterviewQuestions = () => {

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [display, setDisplay] = useState(false);
    const [onSave, setOnSave] = useState(false);

    const [activeDocumentIndex , setActiveDocumentIndex] = useState();

    useEffect(() => {
        setLoading(true);

        fetch(url, {
            method:"GET"
        })
        .then((res) => res.json())
        .then((body) => {
            console.log(body);
            setQuestions(body);
            setActiveDocumentIndex(0);
            setDisplay(true);

        })
    
    //   return () => {
    //     second
    //   }
    }, [])
    
    function handleChangeQuestion(e) {
        // make a shallow copy of the questions array
        let currQuestionsArray = [...questions];
        //make a shallow copy of the active questions
        let currQuestion = {...questions[activeDocumentIndex]};
        currQuestion.question = e.target.value;
        currQuestionsArray[activeDocumentIndex] = currQuestion
        setQuestions((lastQuestions) =>  currQuestionsArray)
        setOnSave(true);
    }

    function handleOnSave(e, currIndex) {

        if(onSave) {
            let id = questions[currIndex]._id;
            let data = JSON.stringify(questions[currIndex]);
            /* post to database */
            fetch(url + '/' + id, {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json'
                },
                body: data
            })
            .then((res) => res.json())
            .then((body) => {
                let currQuestions = [...questions];
                currQuestions[currIndex] = body;
                setQuestions(currQuestions)
            })
            .catch((err) => {
                // TO DO GIVE FEEDBACK TO USER
            })
            setOnSave(false);
        }
        else {

        }

    }

    function handleAddNewQuestion() {
        fetch(url, {
            method: "POST",
            body: ''
        })
        .then((body) => body.json())
        .then((body) => {
            let newArray = [...questions];
            console.log(newArray);
            console.log(`next is the body`);
            newArray.push(body);
            console.log(newArray);
            setQuestions(newArray);
        })
        .catch((err) => {
            console.log('error creating a new record');
        })
    }

    return (


        <div className={style.mainContainer}>
            <Button onClick={handleAddNewQuestion}> Add new Question</Button>
            <div className={style.container}>
                {display && questions.map((masterRecord, index) => (
                <MasterDetailRow
                    key={masterRecord._id}
                    className={style.PortalRow}
                    status={masterRecord.status}
                    headerLabel={masterRecord.question}
                    mainLabel={masterRecord.question}
                    // mainLabel={createMainLabel(masterRecord, mainLabel)}
                    phone1={masterRecord.__V}
                    state={
                        index === activeDocumentIndex ? "active" : "inactive"
                    }
                    rowNumber={Number(index)}
                    cardClick={setActiveDocumentIndex}
                />
                ))}

            </div>
            {display && <div className={style.container}>
                <TextField
                    label='Question'
                    multiline
                    rows={5}
                    sx={{width: 300}}
                    value={questions[activeDocumentIndex].question}
                    onBlur={ (e) => {
                        handleOnSave(e, activeDocumentIndex)
                        }}
                    onChange={handleChangeQuestion}
                    
                />
                <TextField
                    label='Company'
                    variant={"standard"}
                    sx={{width: 300}}
                    value={questions[activeDocumentIndex].company}
                />
                <TextField
                    label='website'
                    variant={"standard"}
                    sx={{width: 300}}
                    value={questions[activeDocumentIndex].website}
                />
                <TextField
                    label='url'
                    variant={"standard"}
                    sx={{width: 300}}
                    value={questions[activeDocumentIndex].url}
                    
                />
                <TextField
                    label='Company'
                    variant={"standard"}
                    sx={{width: 300}}
                    value={questions[activeDocumentIndex].url}
                />
                <ButtonGroup variant="onlined" aria-label="outlined button group">
                    <Button>Easy</Button>
                    <Button>Medium</Button>
                    <Button>Difficult</Button>
                </ButtonGroup>
            </div>}


        </div>
    )
}

export default InterviewQuestions
