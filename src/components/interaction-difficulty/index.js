import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { fetchBoards, fetchGrades, fetchBoardGrade } from './../../services/boardGrade/action';
import { getBGDetails } from './action';

/**
 * InteractionDifficulty tag having IdealBG selector
 * and difficulty radios.
 * Always use this tag under <Form> tag.
 */

class InteractionDifficulty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    componentDidMount() {
        const { boards, grades, initialValues, interaction } = this.props;
        if(!boards) {
            this.props.fetchBoards();
        }
        if(!grades) {
            this.props.fetchGrades();
        }
        if(!initialValues || !initialValues.hasOwnProperty('board')) {
            this.setState({loading: true});
            this.props.fetchBoardGrade(() => {
                this.props.getBGDetails(interaction);
                this.setState({loading: false});
            });
        }
    }
    
    renderRadio = field => {
        let labelJson = {
            '1': 'Easy',
            '2': 'Medium',
            '3': 'Hard' 
        }
        return (<Form.Radio {...field.input} label={labelJson[field.input.value]} onChange={() => field.input.onChange(field.input.value) } />)
    }

    getBoards = () => this.props.boards ? this.props.boards.map( v => (<option key={v.id} value={v.id}>{v.board}</option>)) : null; 
    getGrades = () => this.props.grades ? this.props.grades.map( v => (<option key={v.id} value={v.id}>{v.grade}</option>)): null;

    render() {
        return (
            <div>
            {this.state.loading ? <h3>Loading...</h3> : 
                (<div>
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
                    <Form.Group inline>
                    <label>Difficulty</label>
                        <Field name="difficulty" type="radio" value='1' component={ this.renderRadio } />
                        <Field name="difficulty" type="radio" value='2' component={ this.renderRadio } />
                        <Field name="difficulty" type="radio" value='3' component={ this.renderRadio } />
                    </Form.Group>
                </div>)
            }
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
        interaction: state.interactionReducer,
        initialValues: state.difficultyReducer
    }),
    ({ fetchBoards, fetchGrades, fetchBoardGrade, getBGDetails })             
  )(InteractionDifficulty)

export default InteractionDifficulty;