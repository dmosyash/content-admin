import React from 'react';
import { Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Option from './components/option'

/**
 * Options tag having order-index, option text and correct/wrong boolean
 * Always use this tag under <Form> tag.
 * This is a stateless component
 */

let options = (len) => {
    let arr = [];
    for(let i=0; i<len; i++) {
            arr.push(<Option key={i} index={i} />);
    }
    return arr;
}

const Options = (props) => {
    return (
        <div>
            <Form.Group grouped>
                {options(props.many)}
            </Form.Group>
        </div>
    );
}

export default Options;