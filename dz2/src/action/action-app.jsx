export const appInputValue = (data) => ({
    type: 'APP',
    payload: data
});

export const appData = (data) => ({
    type: 'DATA',
    payload: data
});

export const appSearchTodos = (data) => ({
    type: 'SEARCH_TODOS',
    payload: data
});

// export const appRefreshTodosFlag = (data) => ({
//     type: 'REFRESH_TODOS_FLAG',
//     payload: data
// });



