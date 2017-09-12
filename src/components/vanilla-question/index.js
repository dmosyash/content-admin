import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InteractionDifficulty from './../interaction-difficulty';
import { changeBG } from './../interaction-difficulty/action';
import Options from './../options';
import DragDrop from './../drag-drop';
import 'semantic-ui-css/semantic.min.css';

class VanillaQuestion extends Component {
    constructor(props) {
        super(props);
        this.options = [{}, {}, {}, {}];
    }

    addQuestion = (values) => {
        const { options, difficulty, changeBG, files } = this.props;
        values.options = options.values.options;
        values.difficulty = difficulty.values.difficulty;
        values = {...values, ...files}
        console.log(values);
        changeBG(difficulty.values, (idealBG) => {
            console.log(idealBG);
            values.idealBG = idealBG;
            console.log('Final Product: ', values);
        });
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    renderInput = (field) => {
        return (<Form.Input { ...field.input } label={field.label} placeholder={field.placeholder} />)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={ handleSubmit(this.addQuestion) }>
            <Grid container columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field name="question" label="Question" component={this.renderInput}  placeholder='Question' />
                            <DragDrop text="Question Audio" dropFor="question_audio" />
                        </Form.Group>
                    </Grid.Column>
                    <Grid.Column>
                        <Form.Group widths='equal'>
                            <Field name="explanation" label="Explanation" component={this.renderInput}  placeholder='Explanation' />
                            <DragDrop text="Explanation Audio" dropFor="explanation_audio" />
                        </Form.Group>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Options many='4' />
                    </Grid.Column>
                    <Grid.Column>
                        <InteractionDifficulty />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Form.Group inline style={{float: 'right'}}>
                <Form.Button type="submit">Save</Form.Button>
                <Form.Button>Save and Add</Form.Button>
            </Form.Group>
            </Form>
        )
    }
}

VanillaQuestion = reduxForm({
    form: 'vanillaQuestionForm'  // a unique identifier for this form
})(VanillaQuestion)

VanillaQuestion = connect(
    state => ({
        options: state.form.optionForm,
        difficulty: state.form.difficultyForm,
        files: state.dragDropReducer,
        initialValues: state.questionReducer // pull initial values from account reducer
    }),
    ({ changeBG })               
)(VanillaQuestion)

export default VanillaQuestion;