import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import Button from '@material-ui/core/Button';
import validateEmails from '../../utils/validateEmails';
import { FIELDS } from './formFields';




class SurveyForm extends Component {

    renderFields() {
        return FIELDS.map(({ name, label }) => (
            <Field key={name} label={label} type="text" name={name} component={SurveyField} />
        ))
    }

  render() {
      const { onSurveySubmit } = this.props;
    return (
      <div>
          <h1 style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>Create new survey</h1>
          <form onSubmit={this.props.handleSubmit(onSurveySubmit)}>
              {this.renderFields()}
              <div className="survey_cancel_submit_button_container">
                  <Link to="/surveys">
                      <Button variant="contained" color="secondary" type="button">Cancel</Button>
                  </Link>

                  <Button variant="contained" color="primary" type="submit">Next</Button>
              </div>
          </form>
      </div>
    );
  }
};


function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    if (!values.title) {
        errors.title = 'You must provide a title';
    }

    if (!values.subject) {
        errors.subject = 'You must provide a subject';
    }

    if (!values.body) {
        errors.body = 'You must provide a body';
    }

    if (!values.emails) {
        errors.emails = 'You must provide recipients';
    }



    return errors;
}


export default reduxForm({
    validate: validate,
    destroyOnUnmount: false,
    form: 'surveyForm'
})(SurveyForm);
