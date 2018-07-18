import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

export default ({ input, label, meta: { error, touched } }) => {

    return (
        <div className="survey_input_container">
            <TextField {...input} label={label} />
            <FormHelperText style={{ marginTop: '-3px', color: '#f24' }}>{touched && error}</FormHelperText>
        </div>
    )
}
