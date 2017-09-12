import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

/**
 * InteractionDifficulty tag having IdealBG selector
 * and difficulty radios.
 * Always use this tag under <Form> tag.
 */

class InteractionDifficulty extends Component {
    
    setDifficulty = (e, { value }) => this.setState({ difficulty: value });

    renderRadio = field => {
        let labelJson = {
            '1': 'Easy',
            '2': 'Medium',
            '3': 'Hard' 
        }
        return (<Form.Radio {...field.input} label={labelJson[field.input.value]} onChange={() => field.input.onChange(field.input.value) } />)
    }

    getBoards = () => this.props.boards.map( v => (<option key={v.id} value={v.id}>{v.board}</option>))
    getGrades = () => this.props.grades.map( v => (<option key={v.id} value={v.id}>{v.grade}</option>))

    render() {
        return (
            <div>
                <Form.Group widths='equal'>
                    <Form.Field>
                        <label>Ideal Board</label>
                        <Field name="board" component="select" className="ui selection dropdown">
                            <option value="">Board</option>
                            {this.getBoards()} 
                        </Field>
                    </Form.Field>
                    <Form.Field>
                        <label>Ideal Grade</label>
                        <Field name="grade" component="select" className="ui selection dropdown">
                            <option value="">Grade</option>
                            {this.getGrades()} 
                        </Field>
                    </Form.Field>
                </Form.Group>
                {/* <Form.Group widths='equal'>
                    <Form.Select options={this.boardsList} label='Ideal Board' placeholder='Board' />
                    <Form.Select label='Ideal Grade' options={this.gradesList} placeholder='Grade' />
                </Form.Group> */}
                <Form.Group inline>
                <label>Difficulty</label>
                    <Field name="difficulty" type="radio" value='1' component={ this.renderRadio } />
                    <Field name="difficulty" type="radio" value='2' component={ this.renderRadio } />
                    <Field name="difficulty" type="radio" value='3' component={ this.renderRadio } />
                </Form.Group>
            </div>
        );
    }
}

InteractionDifficulty = reduxForm({
    form: 'difficultyForm'  // a unique identifier for this form
})(InteractionDifficulty)

InteractionDifficulty = connect(
    state => ({
        boards: state.boards,
        grades: state.grades,
        initialValues: state.difficultyReducer
    })             
  )(InteractionDifficulty)

export default InteractionDifficulty;