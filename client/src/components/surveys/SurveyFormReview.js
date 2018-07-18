import React, { Component } from 'react'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { FIELDS } from './formFields';


const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {

    const reviewFields = FIELDS.map(({ name, label }) => {
        return (
            <FormControl className="survey_form_review_field" key={name}>
              <InputLabel htmlFor="name-disabled">{label}</InputLabel>
              <Input id="name-disabled" value={formValues[name]} disabled />
            </FormControl>
        )
    });

    return (
        <div className="survey_form_review_container">
            <h2>Please confirm your entries</h2>
            {reviewFields}
            <div className="survey_cancel_submit_button_container">
                <Button variant="contained" color="secondary" type="button" onClick={onCancel}>Back</Button>

                <Button variant="contained" color="primary" type="submit" onClick={() => submitSurvey(formValues)}>Send Survey</Button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(SurveyFormReview);
