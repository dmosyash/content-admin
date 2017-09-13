import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import InteractionDifficulty from './../interaction-difficulty';
import { changeBG, insertDifficulty, updateDifficulty } from './../interaction-difficulty/action';
import { insertQuestion, insertOption, updateQuestion, updateOption } from './action'
import Options from './../options';
import DragDrop from './../drag-drop';
import 'semantic-ui-css/semantic.min.css';

class VanillaQuestion extends Component {
    constructor(props) {
        super(props);
        this.options = [{}, {}, {}, {}];
        this.buttonText = 'Save';
        this.isUpdate = false;
    }

    componentWillMount() {
        if(this.props.initialValues) {
            this.buttonText = 'Update';
            this.isUpdate = true;
        }
    }

    onSubmit = values => this.isUpdate ? this.update(values) : this.addQuestion(values);

    addQuestion = (values) => {
        alert('pod');
        const { options, difficulty, changeBG, files } = this.props;
        const { insertDifficulty, insertQuestion, insertOption } = this.props;
        changeBG(difficulty.values, (idealBG) => {
            difficulty.values.idealBG = idealBG;
            difficulty.values.content = this.props.contentId;
            insertDifficulty(difficulty.values, response => {
                let interactionId = response.data.id;
                insertQuestion(values, interactionId, this.props.contentType);
                for(let i=0; i<options.values.options.length; i++) {
                    let body = options.values.options[i];
                    body.is_correct = body.is_correct ? true : false;
                    body.order = i+1; 
                    insertOption(body, interactionId, this.props.contentType);
                }
            });
            console.log('Final Product: ', values);
        });
    }

    update = (values) => {
        const { options, difficulty, changeBG, files } = this.props;
        const { updateDifficulty, updateQuestion, updateOption } = this.props;
        changeBG(difficulty.values, (idealBG) => {
            difficulty.values.idealBG = idealBG;
            difficulty.values.content = this.props.contentId;
            updateDifficulty(difficulty.values, response => {
                let interactionId = response.data.id;
                updateQuestion(values, interactionId, this.props.contentType);
                for(let i=0; i<options.values.options.length; i++) {
                    let body = options.values.options[i];
                    body.is_correct = body.is_correct ? true : false;
                    body.order = i+1; 
                    updateOption(body, interactionId, this.props.contentType);
                }
            });
            console.log('Final Product: ', values, options.values.options, difficulty.values);
        });
    }

    renderInput = (field) => {
        return (<Form.Input { ...field.input } label={field.label} placeholder={field.placeholder} />)
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <Form onSubmit={ handleSubmit(this.onSubmit) }>
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
                <Form.Button type="submit">{this.buttonText}</Form.Button>
                {this.isUpdate ? '' : (<Form.Button>Save and Add</Form.Button>)}
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
        initialValues: state.interactionReducer // pull initial values from account reducer
    }),
    ({ changeBG, insertDifficulty, insertQuestion, insertOption, updateDifficulty, updateQuestion, updateOption })               
)(VanillaQuestion)

export default VanillaQuestion;