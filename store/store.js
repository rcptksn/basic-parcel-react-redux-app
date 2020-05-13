import {createStore} from 'redux';

let initialState = {
    name: 'React & Redux'
};

function myReducer(state, action) {
    switch (action.type) {
        case 'GETNAME':
            return Object.assign({}, state, {name: action.name});
        default:
            return state;
    }
}

export default createStore(myReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());