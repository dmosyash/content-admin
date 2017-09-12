import React, { Component } from 'react';
import { Button, Modal, Table, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import VanillaQuestion from './../../vanilla-question';
import { selectInteraction } from './../../../services/interaction/action';

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
        console.log('row: ', this.props.data);
        this.props.selectInteraction(this.props.data);
    }

    updateOptions = row => {
        this.options = [];
        for(let i=0; i<4; i++) {
            let json = {};
            if(row.options[i]) {
                json.correct = row.options[i].is_correct;
                json.option = row.options[i].option;
            } else {
                json.correct = false;
                json.option = '';                
            }
            this.options.push(json);
        }
    }

    render() {
        const row = this.props.data;
        this.updateOptions(row);
        let tableRow = (
            <Table.Row onClick={this.passData}>
                <Table.Cell><span className="handle"><Icon name="list layout" /></span>{row.index}</Table.Cell>
                <Table.Cell singleLine>{row.id}</Table.Cell>
                <Table.Cell>{difficultyJson[row.difficulty]}</Table.Cell>
                <Table.Cell> {row.question}<br /> <audio controls><source src={row.question_audio_path} /></audio> </Table.Cell>
                <Table.Cell> {row.explanation} <audio controls><source src={row.explanation_audio_path}/></audio> </Table.Cell>
                <Table.Cell positive={this.options[0].correct} negative={!this.options[0].correct}> {this.options[0].option} </Table.Cell>
                <Table.Cell  positive={this.options[1].correct} negative={!this.options[1].correct}> {this.options[1].option} </Table.Cell>
                <Table.Cell positive={this.options[2].correct} negative={!this.options[2].correct}> {this.options[2].option} </Table.Cell>
                <Table.Cell positive={this.options[3].correct} negative={!this.options[3].correct}> {this.options[3].option} </Table.Cell>
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

export default connect(null, { selectInteraction })(Question);