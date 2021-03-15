import React, {Component} from "react";
import {
    SafeAreaView,
    StyleSheet,
} from "react-native";
import AddTodo from './containers/AddTodo'
import TodoList from './containers/TodoList'
import {Provider} from 'react-redux'
import store from './store'

export default function TodoApp(){


    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <AddTodo/>
                <TodoList/>
            </SafeAreaView>
        </Provider>
        )
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#fff',
            paddingTop:40
        },
    });