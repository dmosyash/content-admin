import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Header, Label } from 'semantic-ui-react';
import BackToTopic from './components/backToTopic';
import DifficultyBreakdown from './components/difficultyBreakdown';
import { selectInteraction } from './../../services/interaction/action';
import { rejectContent, approveContent } from './action';

/**
 * @name ContentHeader 
 * @description This component contains
 * all header components of the content page.
 * It will be used as header on evry contentType page.
 */

class ContentHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDifficultyBreakdown: false,
            isApproved: false,
            loading: true
        }
    }

    componentDidUpdate() {
        if (this.props.isApproved !== this.state.isApproved && this.state.loading) {
            this.setState({ isApproved: this.props.isApproved, loading: false });
        }
    }

    addNew = () => {
        this.props.selectInteraction(null);
        this.props.toggleFormVisibility();
    }

    difficultyAnalyticsToggle = () => {
        this.setState({ showDifficultyBreakdown: !this.state.showDifficultyBreakdown });
    }

    rejectThisContent = () => {
        const { contentId , rejectContent } = this.props;
        rejectContent(contentId);
    }

    approveThisContent = () => {
        const { contentId, approveContent } = this.props;
        this.setState({ loading: true });
        approveContent(contentId, () => {
            this.setState({ isApproved: true, loading: false });
        });
    }

    render() {
        const { name, type, showQuestionForm } = this.props;
        const { isApproved, loading, showDifficultyBreakdown } = this.state;
        return (
            <Grid padded>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <BackToTopic />
                    </Grid.Column>
                    <Grid.Column>
                        <Loader loading={loading}><Header as='h2'>{ name }</Header></Loader>
                    </Grid.Column>
                    <Grid.Column>
                        <Loader loading={loading}><Header as='h4'>{ type }</Header></Loader>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Button onClick={this.addNew}>{!showQuestionForm ? 'Add New' : 'Hide Form'}</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={this.difficultyAnalyticsToggle}>Difficulty Breakdown</Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Loader loading={loading}> 
                            {isApproved ? <Label color='blue' tag style={{ float: 'right' }}>Approved</Label> : 
                                <Button.Group style={{ float: 'right' }}>
                                    <Button onClick={this.rejectThisContent}>Scrap</Button>
                                    <Button.Or />
                                    <Button positive onClick={this.approveThisContent}>Approve</Button>
                                </Button.Group>
                            }
                        </Loader>
                    </Grid.Column>
                </Grid.Row>
                {showDifficultyBreakdown ? (<Grid.Row>
                    <DifficultyBreakdown />
                </Grid.Row>) : null}
            </Grid>            
         )
     }
}

export default connect(null, { selectInteraction, rejectContent, approveContent })(ContentHeader);

const Loader = (props) => (<div>{ props.loading ? <h4>Loading...</h4> : props.children }</div>)