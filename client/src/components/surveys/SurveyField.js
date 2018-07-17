import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';

export default ({ input, label }) => {

    return (
        <div className="survey_input_container">
            <TextField {...input} label={label} />
        </div>
    )
}
