const reducer = (state, action) => {
    switch (action.type) {
        case 'PlusObject':
            return {
            ...state
            }
        default:
            return state;
    }
};

export default reducer 