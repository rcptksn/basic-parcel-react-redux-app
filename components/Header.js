import React, {Component} from 'react';
import ParcelLogo from "../img/logo.svg";
import {connect} from 'react-redux';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <img width="120" src={ParcelLogo} alt=""/>
                        </a>
                    </div>
                </nav>
            </header>
        );
    }

    componentDidMount() {
        console.log('Header - ' + this.props.name);
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
};

export default connect(mapStateToProps)(Header);