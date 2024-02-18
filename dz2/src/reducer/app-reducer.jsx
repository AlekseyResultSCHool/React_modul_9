export const initialAppState = {
        inputValue: '',
        data: '',
        searchTodos: '',
};

export const AppReducer = (state = initialAppState, action) => {

    switch (action.type) {
        
        case 'APP': {
            return {
                ...state,
                inputValue: action.payload
            }
        }
        case 'DATA': {
            return {
                ...state,
                data: action.payload
            }
        }
        case 'SEARCH_TODOS': {
            return {
                ...state,
                searchTodos: action.payload
            }
        }

        case 'REFRESH_TODOS_FLAG': {
            return {
                ...state,
                    refreshTodosFlag: action.payload
            }
        }
        default: 
        return state;
    }
};

