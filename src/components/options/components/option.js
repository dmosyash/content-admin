import React from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

/**
 * @name Option tag 
 * @description this tag having serial no., option text and correct/wrong boolean
 * Always use this tag under <Form> tag.
 */

function renderOptionText(field) {    
    return (
        <Form.Input {...field.input} placeholder='Option text' />
    )
}

function renderRadio(field) {
    return (
        <Form.Checkbox toggle {...field.input} checked={field.input.value === true} onChange={() => field.input.onChange(!field.input.value) } />
    )
}

let Option = (props) => {
    return (
        <Form.Group inline>
            <Field name={`options[${props.index}].option`} defaultValue={props.text} component={renderOptionText} />
            <Field name={`options[${props.index}].isCorrect`} defaultValue={props.isCorrect} component={renderRadio} />
        </Form.Group>
    );
}

Option = reduxForm({
    form: 'optionForm'  // a unique identifier for this form
})(Option)
  
//   You have to connect() to any reducers that you wish to connect to yourself
  Option = connect(
    state => ({
      initialValues: state.questionReducer // pull initial values from account reducer
    })               
  )(Option)

  export default Option;