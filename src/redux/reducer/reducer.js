// reducer.js

let initialState = {
    count: 0,
    authenticate: false,
    id: '',
    pw: '',
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case "INCREAMENT" : {
            return {...state, count: state.count + action.payload.num};
        }
        case "DECREAMENT" : {
            return {...state, count: state.count - action.payload.num};
        }
        case "RESETCOUNTER" : {
            return {...state, count: 0};
        }
        case "SIGNIN" : {
            return {
                ...state, 
                authenticate: true,
                id: action.payload.id,
                pw: action.payload.pw,
            };
        }
        case "SIGNOUT" : {
            return {
                ...state, 
                counter: 0,
                authenticate: false,
                id: '',
                pw: '',
            };
        }
        default : {
            return {...state};
        }
    }
};

export default reducer;