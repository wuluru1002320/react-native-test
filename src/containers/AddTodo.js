import React, {Component} from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import { connect } from 'react-redux'
import { onTaskInputChange, addTask } from "../actions"

function AddTodo({taskName,id,onTaskInputChange,addTask}){
    function handleOnChange(text) {
        onTaskInputChange(text);
        }
    function handleOnPress() {
        id+=1
        addTask(taskName,id);
    }


    return (
        <View style={{flexDirection:'row',marginHorizontal: 20}}>
            <TextInput
                onChangeText={handleOnChange}   
                placeholder="Eg. Create New Video"
                style={{ borderWidth:1,borderColor:'#f2f2e1',backgroundColor:'#eaeaea', height:50, flex:1, padding:5 }}
            />
            <TouchableOpacity onPress={handleOnPress}>
                <View sytle={{height:50,backgroundColor:'#eaeaea',alignItems:'center',justifyContent:'center'}}>
                    <Ionicons name="md-add" size={30} style={{color:'#de9595',padding:10}} />
                </View>
            </TouchableOpacity>
        </View>)
}

const mapStateToProps = (state) =>{
    return{
        taskName: state.taskName,
        id:state.id
    }
}

const action = {
    onTaskInputChange : onTaskInputChange,
    addTask: addTask,
}

export default connect(mapStateToProps,action)(AddTodo)

