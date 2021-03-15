import React, {Component} from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    StatusBar
} from "react-native";
import AddTodo from './containers/AddTodo'
import VisibleTodos from './containers/VisibleTodos'

export default function TodoApp(){

    const state={
        todo:[],
        visibilityFilter:'SHOW_ALL_TODOS'
    }

    return (
        <SafeAreaView style={styles.container}>
            <AddTodo/>

            <View>
                <VisibleTodos/>
            </View>
        </SafeAreaView>)
}
const styles = StyleSheet.create({
    container: {
            flex: 1,
            backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   paddingTop: Platform.OS === "android"? StatusBar.currentHeight+40: 0,
            paddingTop:40
        },
    });