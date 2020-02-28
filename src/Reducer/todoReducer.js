export const todoReducer = (state=[], action) => {
    switch (action.type) {
        case 'add': 
            return [ ...state, action.data]
        case 'edit': 
                const array = [...state];
                array[action.data.index] = action.data.value
                return [...array]
        default: 
            return state;
    }
}