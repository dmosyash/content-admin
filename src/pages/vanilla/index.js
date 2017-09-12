import React, { Component } from 'react';
import QuestionTable from './../../components/vanilla-list';
import VanillaQuestion from './../../components/vanilla-question';
import { Form } from 'semantic-ui-react';

class Vanilla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestionForm: false
        }
    }
    
    addNew = () => {
        const { showQuestionForm } = this.state; 
        this.setState({showQuestionForm: !showQuestionForm});
    }
    
    render() {
        const { showQuestionForm } = this.state;
        return (
            <div>
                <Form.Button onClick={this.addNew}>{!showQuestionForm ? 'Add New' : 'Hide Form'}</Form.Button>
                { showQuestionForm ? <VanillaQuestion /> : '' }
                { showQuestionForm ? (<div><br /><Form.Button onClick={this.addNew}>Hide Form</Form.Button></div>) : null }
                <QuestionTable />
            </div>
        );
    }
}

export default Vanilla;