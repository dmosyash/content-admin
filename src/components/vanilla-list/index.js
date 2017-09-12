import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Question from './components/row';
import { connect } from 'react-redux';
import Sortable from 'sortablejs';

/**
 * @name QuestionTable 
 * @description tag is Vanilla Question's table
 */

 class QuestionTable extends Component {
    populateTable = () => {
        return this.props.questions.map( v => {
            return <Question key={v.id} data={v} />
        })
    } 
    
    componentDidMount() {
        var tb = document.getElementById('tbody');
        Sortable.create(tb, {handle: '.handle', animation: 100});
    }

    render() {
        return (
            <Table celled padded>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Order</Table.HeaderCell>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Difficulty</Table.HeaderCell>
                    <Table.HeaderCell>Question</Table.HeaderCell>
                    <Table.HeaderCell>Explanation</Table.HeaderCell>
                    <Table.HeaderCell>Option 1</Table.HeaderCell>
                    <Table.HeaderCell>Option 2</Table.HeaderCell>
                    <Table.HeaderCell>Option 3</Table.HeaderCell>
                    <Table.HeaderCell>Option 4</Table.HeaderCell>
                    <Table.HeaderCell>Actions</Table.HeaderCell>
                </Table.Row>
                </Table.Header>
                <Table.Body id="tbody">
                    {this.populateTable()}
                </Table.Body>
            </Table>
        );
    }
 }

 export default connect(state => ({questions: state.questions}))(QuestionTable);