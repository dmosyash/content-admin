import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Header extends Component {
    state = {};

    handleItemClick = (e, { name }) => { this.setState({ activeItem: name }); }

    render() {
        const { activeItem } = this.state

        return (
            <Menu>
                <Menu.Item as={ Link }
                name='home'
                to="/"
                active={activeItem === 'home'}
                onClick={this.handleItemClick}
                >
                 Home 
                </Menu.Item>

                <Menu.Item as={ Link }
                name='addContent'
                to="/add-content"
                active={activeItem === 'addContent'}
                onClick={this.handleItemClick}
                >
                Add Content
                </Menu.Item>

                <Menu.Item as={ Link }
                name='addSlides'
                to="/add-slides"
                active={activeItem === 'addSlides'}
                onClick={this.handleItemClick}
                >
                Add Slides
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;