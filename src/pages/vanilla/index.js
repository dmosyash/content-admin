import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'semantic-ui-react';
import ContentHeader from './../../components/content-header';
import QuestionTable from './../../components/vanilla-list';
import VanillaQuestion from './../../components/vanilla-question';
import { getContent } from './action';

class Vanilla extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showQuestionForm: false
        }
    }
    
    toggleFormVisibility = () => {
        const { showQuestionForm } = this.state; 
        this.setState({showQuestionForm: !showQuestionForm});
    }

    componentWillMount() {
        this.contentId = this.props.match ? this.props.match.params.id : null;
        this.props.getContent(this.contentId);
    }
    
    render() {
        const { showQuestionForm } = this.state;
        const { name, content_type, is_approved } = this.props.content;
        return (
            <div>
                <ContentHeader toggleFormVisibility={this.toggleFormVisibility} contentId={this.contentId} name={name} type={content_type} showQuestionForm={showQuestionForm} isApproved={is_approved} />
                {showQuestionForm ? <VanillaQuestion contentId={this.contentId} contentType={content_type} /> : null }
                {showQuestionForm ? (<div><br /><Form.Button onClick={this.toggleFormVisibility}>Hide Form</Form.Button></div>) : null }
                <QuestionTable contentId={this.contentId}/>
            </div>
        );
    }
}

Vanilla = connect(
    state => ({
        content: state.content
    }),
    { getContent }
)
(Vanilla);

export default Vanilla; 