export const hookIsCreating = (data) => ({
    type: 'ISCREATING',
    payload: data
});

export const hookIsDeleting = (data) => ({
    type: 'ISDELETING',
    payload: data
});

export const hookIsUpdating = (data) => ({
    type: 'ISUPDATING',
    payload: data
});

export const hookIsLoading = (data) => ({
    type: 'ISLOADING',
    payload: data
});

export const hookSortTodos = (data) => ({
    type: 'SORTTODOS',
    payload: data
});

export const hookTodos = (data) => ({
    type: 'TODOS',
    payload: data
});

export const hookUrl = (data) => ({
    type: 'URL',
    payload: data
});
export const hookRefreshTodosFlag = (data) => ({
    type: 'FLAG',
    payload: data
});







