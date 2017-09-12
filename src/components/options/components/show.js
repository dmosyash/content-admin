import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Option tag having serial no., option text and correct/wrong boolean
 * Always use this tag under <Form> tag.
 */

class Show extends Component {

    render() {
        if(this.props.data) {
            return (
                <div>
                    <p>{this.props.data.hasOwnProperty('values') ? `${this.props.data.values.text} and isCorrect: ${this.props.data.values.isCorrect}` : 'Nothing yet :('}</p>
                </div>
            );
        } 
        return null;
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        data: state.form.difficultyForm
    }
}

export default connect(mapStateToProps)(Show);