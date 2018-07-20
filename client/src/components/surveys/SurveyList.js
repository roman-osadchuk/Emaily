import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }


  render() {
    return (
      <div>
          {this.props.surveys.reverse().map(survey => {
              return (
                  <div key={survey._id} style={{ margin: '20px' }}>
                    <Card>
                      <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                          {survey.title}
                        </Typography>
                        <Typography component="p">{survey.body}</Typography>
                      </CardContent>
                      <CardActions>
                        <div>
                            Sent On: {new Date(survey.dateSent).toLocaleDateString()}
                        </div>
                      </CardActions>
                      <CardActions>
                          <Button size="small" color="primary">
                            Yes: {survey.yes}
                          </Button>
                          <Button size="small" color="primary">
                            No: {survey.no}
                          </Button>
                      </CardActions>
                    </Card>
                  </div>
              )
          })}
      </div>
    );
  }
};

function mapStateToProps({ surveys }) {
    return { surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
