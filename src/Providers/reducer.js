const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
            ...state,
            };
        default:
            return state;
    }
};

export default reducer 