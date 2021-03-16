const initialState = {
    id:0,
    taskName:"",
    completed:false,
    task:[]
}

const todos = (state=initialState,action)=>{
    switch(action.type){
        case 'ON_TASK_INPUT_CHANGE':
            return {...state,taskName:action.payload}
        case 'ADD_TODO':
            return {...state, id:action.payload.id, taskName:action.payload.taskName, task: [
                ...state.task
                ,{taskName:action.payload.taskName,id:action.payload.id,completed:false}
            ]
        }
        case 'TOGGLE_TODO':
            const newArray = state.task.map(task=>(task.id === action.payload.id) ? 
            {...task,completed:action.payload.completed}:task)
            return {...state,task:newArray}
        default:
            return state
    }
}
export default todos