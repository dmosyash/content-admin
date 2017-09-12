import React, { Component } from 'react';
import { Button, Modal, Table, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import VanillaQuestion from './../../vanilla-question';
import { selectQuestion } from './../action';

/**
 * @name Question 
 * @description tag is a row for Vanilla Question's table
 * Always use this tag under <Table> tag.
 */

const difficultyJson = {
    1: 'Easy',
    2: 'Medium',
    3: 'Hard'
}

class Question extends Component {
    passData = () => {
        this.props.selectQuestion(this.props.data);
    }

    getOptionStyle = (option) => {
        let style = {};
        if(option.hasOwnProperty('isCorrect') && option.isCorrect) {
            style.backgroundColor = 'green';
        }
        return style;
    }

    getOption = (index) => {
        const { options } = this.props.data;
        let style = {};
        if(options[index].hasOwnProperty('isCorrect') && options[index].isCorrect) {
            style.backgroundColor = 'green';
        }
        return (<Table.Cell style={style}>{options[index].option}</Table.Cell>);
    }

    render() {
        const row = this.props.data;
        let tableRow = (
            <Table.Row onClick={this.passData}>
                <Table.Cell><span className="handle"><Icon name="list layout" /></span>{row.index}</Table.Cell>
                <Table.Cell singleLine>{row.id}</Table.Cell>
                <Table.Cell>{difficultyJson[row.difficulty]}</Table.Cell>
                <Table.Cell> {row.question} {row.question.audio} </Table.Cell>
                <Table.Cell> {row.explanation} {row.explanation.audio} </Table.Cell>
                <Table.Cell positive={row.options[0].isCorrect} negative={!row.options[0].isCorrect}> {row.options[0].option} </Table.Cell>
                <Table.Cell  positive={row.options[1].isCorrect} negative={!row.options[1].isCorrect}> {row.options[1].option} </Table.Cell>
                <Table.Cell positive={row.options[2].isCorrect} negative={!row.options[2].isCorrect}> {row.options[2].option} </Table.Cell>
                <Table.Cell positive={row.options[3].isCorrect} negative={!row.options[3].isCorrect}> {row.options[3].option} </Table.Cell>
                <Table.Cell> <Button circular icon="delete" color="red" inverted></Button> 
                </Table.Cell>
            </Table.Row>
        );
        let modal = (
            <Modal trigger={tableRow}>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content>
                    <VanillaQuestion />
                </Modal.Content>
            </Modal>
        )
        return modal;
    }
}

export default connect(null, { selectQuestion })(Question);