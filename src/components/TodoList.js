import React from "react";
import {
    view,
    Text,
    StyleSheet,
    TouchableOpacity
}from "react-native"

const TodoList =({todos,toggleTodo})=>(
    <View style={styles.container}>
        {todos.map(todo=>
            <TouchableOpacity key={todo.id} onPress={()=>toggleTodo(todo.id)} >
                <Text style ={{fountSize:24,
                    textDecorationLine:todo.completed?'line-through':'none'
                }}>{todo.text}</Text>
            </TouchableOpacity>
            )}
    </View>
)

export default TodoList;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:20
    }
})