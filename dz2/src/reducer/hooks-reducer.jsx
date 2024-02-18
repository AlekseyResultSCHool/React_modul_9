export const initialState = {
    isCreating: false,
    isDeleting: false,
    isLoading: false,
    sortTodos: false,
    todos: [],
    url: 'http://localhost:3005/todos',
    refreshTodosFlag: false,
    isUpdating: false
};

export const hookReducer = (state = initialState, action) => {

    switch (action.type) {
       
        case 'ISCREATING': {
            return {
                ...state,
                isCreating: action.payload
            } 
        }

        case 'ISDELETING': {
            return {
                ...state,
                isDeleting: action.payload
            } 
        }

        case 'ISUPDATING': {
            return {
                ...state,
                isDeleting: action.payload
            } 
        }

        case 'ISLOADING': {
            return {
                ...state,
                isLoading: action.payload
            } 
        }

        case 'SORTTODOS': {
            return {
                ...state,
                sortTodos: action.payload
            } 
        }

        case 'TODOS': {
            return {
                ...state,
                todos: action.payload
            } 
        }

        case 'URL': {
            return {
                ...state,
                url: action.payload
            } 
        }

        case 'FLAG': {
            return {
                ...state,
                refreshTodosFlag: !state.refreshTodosFlag,
            } 
        }

        default: 
        return state;
    }
};



