import { TextField, Button, ButtonGroup} from "@mui/material";
import React from "react";

/******
 * 
 */

// import MasterDetail from "../components/MasterDetail";
import Card from "../components/UI/Card";

const JobApplications = () => {

    return (

        <>

             <Card>
                <TextField
                    label='Position'
                    multiline
                    rows={5}
                    sx={{width: 300}}
                />
                <TextField
                    label='experience level'
                    variant={"standard"}
                    sx={{width: 300}}
                />
                <TextField
                    label='website'
                    variant={"standard"}
                    sx={{width: 300}}
                />
                <TextField
                    label='url'
                    variant={"standard"}
                    sx={{width: 300}}
                />
                <TextField
                    label='Company'
                    variant={"standard"}
                    sx={{width: 300}}
                />
                <ButtonGroup variant="onlined" aria-label="outlined button group">
                    <Button>Easy</Button>
                    <Button>Medium</Button>
                    <Button>Difficult</Button>
                </ButtonGroup>


             </Card>
        </>

    )
}

export default JobApplications
