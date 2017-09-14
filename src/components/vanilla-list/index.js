import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Question from './components/row';
import { connect } from 'react-redux';
import Sortable from 'sortablejs';
import { fetchQuestion, fetchOptions } from './action';
import { fetchInteractions } from './../../services/interaction/action';

/**
 * @name QuestionTable 
 * @description tag is Vanilla Question's table
 */

 class QuestionTable extends Component {
    populateTable = () => {
        let { vanilla, interaction, options } = this.props;
        if(!vanilla || !interaction || !options) {
            return null;
        }
        return vanilla.map( v => {
            v.options = [];
            if(options !== null) {
                for(let i=0; i<options.length; i++) {
                    if(v.interaction === options[i].vanilla) {
                        v.options.push(options[i]);
                        options.splice(i, 1);
                        i--;
                    }
                }
            }
            if(interaction !== null) {
                for(let j=0; j<interaction.length; j++) {
                    if(v.interaction === interaction[j].id) {
                        delete interaction[j].id;
                        v = {...v, ...interaction[j]}
                    }
                }
            }
            v.question_audio_path = 'https://lgwarehouse.s3.amazonaws.com/media/resources/slide/5683/zeroes-after-decimals.mp3';
            return <Question key={v.id} data={v} />;
        });
    } 

    componentWillMount() {
        const { fetchQuestion, fetchInteractions, fetchOptions } = this.props;
        const contentId = this.props.contentId;
        fetchQuestion({interaction__content: contentId});
        fetchInteractions({content: contentId});
        fetchOptions({vanilla__interaction__content: contentId});
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

QuestionTable = connect(
    state => ({
         vanilla: state.vanilla,
         interaction: state.interactions,
         options: state.vanillaOptions
    }),
    ({ fetchQuestion, fetchInteractions, fetchOptions })
)(QuestionTable)

 export default QuestionTable;