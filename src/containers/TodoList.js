import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
}from "react-native"
import {connect} from "react-redux"
import { toggleTodo } from "../actions";

const TodoList =({task,toggleTodo})=>{
    function handleToggle(id,completed){
        toggleTodo(id,completed)
    }

    return(
    <View style={styles.container}>
        {task.map(task =>
            <TouchableOpacity key={task.id} onPress={()=>handleToggle(task.id,task.completed)} >
                <Text style ={{fontSize:24,
                    textDecorationLine:task.completed?'line-through':'none'
                }}>{task.taskName}</Text>
            </TouchableOpacity>
            )}
    </View>
)}

const mapStateToProps = (state) =>{
    return{
        task:state.task,
    }
}

const action = {
    toggleTodo:toggleTodo
}

export default connect(mapStateToProps, action)(TodoList);

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:20
    }
})