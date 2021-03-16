export const onTaskInputChange = (inputText) => {
    return {
        type: "ON_TASK_INPUT_CHANGE",
        payload: inputText
    };
};
export const addTask = (inputText,id) => {
    return {
        type: "ADD_TODO",
        payload: {taskName:inputText,id:id}
    };
};
export const toggleTodo = (id,completed) => {
    return {
        type:"TOGGLE_TODO",
        payload:{id:id,completed:!completed}
    }
} 