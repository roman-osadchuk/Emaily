import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import Button from '@material-ui/core/Button';


const FIELDS = [
    { label: 'Survey Title', name: 'title' },
    { label: 'Subject Line', name: 'subject' },
    { label: 'Email Body', name: 'body' },
    { label: 'Recipient List', name: 'emails' }
];

class SurveyForm extends Component {

    renderFields() {
        return FIELDS.map(({ name, label }) => (
            <Field key={name} label={label} type="text" name={name} component={SurveyField} />
        ))
    }

  render() {
    return (
      <div>
          <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
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

export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm);
