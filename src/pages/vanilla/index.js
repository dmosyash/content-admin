import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import QuestionTable from './../../components/vanilla-list';
import VanillaQuestion from './../../components/vanilla-question';
import { selectInteraction } from './../../services/interaction/action';

class Vanilla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestionForm: false
        }
    }
    
    addNew = () => {
        const { showQuestionForm } = this.state; 
        this.props.selectInteraction(null);
        this.setState({showQuestionForm: !showQuestionForm});
    }

    componentWillMount() {
        this.contentId = this.props.match ? this.props.match.params.id : null;
    }
    
    render() {
        const { showQuestionForm } = this.state;
        return (
            <div>
                <Form.Button onClick={this.addNew}>{!showQuestionForm ? 'Add New' : 'Hide Form'}</Form.Button>
                { showQuestionForm ? <VanillaQuestion contentId={this.contentId} contentType="vanilla" /> : '' }
                { showQuestionForm ? (<div><br /><Form.Button onClick={this.addNew}>Hide Form</Form.Button></div>) : null }
                <QuestionTable contentId={this.contentId}/>
            </div>
        );
    }
}

export default connect(null, { selectInteraction })(Vanilla);