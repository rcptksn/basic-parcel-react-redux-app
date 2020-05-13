import React from "react";
import {connect} from 'react-redux';
import Header from './components/Header';
import './scss/app.scss';

class App extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <h1>Hello {this.props.name}</h1>
                <button onClick={this.props.changeName}>Change</button>
            </div>
        </div>
    }
}

const mapStateToProps = (state/*, ownProps*/) => {
    return {
        name: state.name,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeName: () => dispatch({'type': 'GETNAME', 'name': 'Redux Props'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)