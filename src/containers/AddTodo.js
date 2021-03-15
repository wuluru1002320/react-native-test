import React, {Component,useState} from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from "react-native";
import {Ionicons} from '@expo/vector-icons'
import connect from 'react-redux'

function AddTodo(){


    return (
        <View style={{flexDirection:'row',marginHorizontal: 20}}>
            <TextInput
                onChangeText={()=>{}}   
                placeholder="Eg. Create New Video"
                style={{ borderWidth:1,borderColor:'#f2f2e1',backgroundColor:'#eaeaea', height:50, flex:1, padding:5 }}
            />
            <TouchableOpacity onPress={()=>{}}>
                <View sytle={{height:50,backgroundColor:'#eaeaea',alignItems:'center',justifyContent:'center'}}>
                    <Ionicons name="md-add" size={30} style={{color:'#de9595',padding:10}} />
                </View>
            </TouchableOpacity>
        </View>)
}

export default connect()(AddTodo)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === "android"? 20 : 0,
    },
});