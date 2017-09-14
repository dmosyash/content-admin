import React from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';

/**
 * @name DifficultyBreakdown 
 * @description 
 */

let json = {
    easy: 0,
    medium: 0,
    hard: 0
}

let dictionary = {
    1: 'easy',
    2: 'medium',
    3: 'hard'
}

function getAnalytics(data) {
    data.forEach( function(v) {
        json[dictionary[v.difficulty]] += 1;    
    });
    json.total = data.length;
}

let DifficultyBreakdown = (props) => {
    return (
        <Table celled padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Easy</Table.HeaderCell>
                    <Table.HeaderCell>Medium</Table.HeaderCell>
                    <Table.HeaderCell>Hard</Table.HeaderCell>
                    <Table.HeaderCell>Total</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    <Table.Cell>{json.easy}</Table.Cell>
                    <Table.Cell>{json.medium}</Table.Cell>
                    <Table.Cell>{json.hard}</Table.Cell>
                    <Table.Cell>{json.total}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}

DifficultyBreakdown = connect(
    state => ({
        analytics: getAnalytics(state.interactions)
    })
)(DifficultyBreakdown);

export default DifficultyBreakdown;
