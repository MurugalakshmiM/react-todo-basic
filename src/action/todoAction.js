export const addTodo = (todoElement) => {
    return {
        type: 'add',
        data: todoElement,
    }
}

export const editTodo = (editElement) => {
    return {
        type: 'edit',
        data: editElement
    }
}