import React, { Component } from 'react';
import { Segment, Card, Image, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import { updateData } from './action';

/**
 * DragDrop tag having Drop area.
 */

class DragDrop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDropped: false,
            showPreview: props.initialValues[props.dropFor] ? true : false
        }
        this.files = [];
        this.fileType = null;
        this.preview = props.initialValues[props.dropFor];
        this.previewName = null;
    }
    
    onDrop = files => {
        this.files = files; 
        console.log(files);
        if(files.length > 0) {
            this.setState({
                isDropped: true,
                showPreview: files.length === 1
            })
        }
        this.fileType = files.length === 1 ? files[0].type : null;
        this.preview = this.files[0].preview;
        this.previewName = this.files[0].name;
    }

    clearPreview(url) {
        this.setState({showPreview: false});
        window.URL.revokeObjectURL(url);
    }

    declinePreview = () => {
        if(this.files.length > 0) {
            this.clearPreview(this.files[0].preview)
        } else {
            let json = this.props.initialValues;
            json[this.props.dropFor] = null;
            this.props.updateData(json);
        }
    }

    acceptPreview = () => {
        if(this.files.length > 0) {
            let json = this.props.initialValues;
            json[this.props.dropFor] = this.preview;
            this.props.updateData(json);
            console.log(json);
        }
    }

    previewElement = () => {
        let image = null, audio = null;
        const { initialValues, dropFor } = this.props;
        if(dropFor.indexOf('image') !== -1) {
            image = (<Image src={ this.preview } />);
        } else {
            audio = (<audio controls><source src={this.preview} type="audio/mpeg" /></audio>)
        }
        return (
            <Card>
                {image}
                <Card.Content>
                    <Card.Header>
                        {audio ? audio : this.previewName ? this.previewName : null }
                    </Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        {initialValues[dropFor] ? null :
                        (<Button basic color='green' onClick={this.acceptPreview}>Approve</Button>)}
                        <Button basic color='red' onClick={this.declinePreview}>Decline</Button>
                    </div>
                </Card.Content>
            </Card>
        );
    }

    render() {        
        if(this.state.showPreview) {
            return this.previewElement();
        }
        return (
            <Segment>
                <Dropzone onDrop={this.onDrop} >
                    <p>{this.props.text}</p>
                </Dropzone>
            </Segment>
        );
    }
}
  
DragDrop = connect(
    state => ({
        initialValues: state.dragDropReducer // pull initial values from account reducer
    }),
    ({ updateData })               
)(DragDrop)

export default DragDrop;