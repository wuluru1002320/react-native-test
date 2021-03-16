
import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Image, 
  Button,
  Alert,
  Platform,
  Dimensions,
  StatusBar,
  SafeAreaView } from 'react-native';
import {Provider} from 'react-redux'
import TodoApp from './src/TodoApp'
import store from './src/store'

export default function App() {
  return (
    <Provider store={store}>
      {/* <Text>Hello Expo!</Text> */}
      {/* <Text numberOfLines={1} onPress={handlePress}>Hello Expo!
      </Text>
      <TouchableHighlight onPress={()=>{console.log("TouWF")}}>
        <Image blurRadius={10} source={ { width:200, height:200, uri : "https://picsum.photos/200" } } />
      </TouchableHighlight>
      <Image source={require('./assets/favicon.png')}/>
      <Button color="orange" title="Click Me" 
        onPress={()=>{
          Alert.alert("my title",
            "my message",
            [{text:"yes"},
              {text:"no"}]
        )
      }}
      />
      <Button color="orange" title="Click Me propmt" 
        onPress={()=>{
          Alert.prompt("my title",
            "my message",
            text=>console.log(text)
        )
      }}
      />
      <StatusBar style="auto" />
      <View style={{backgroundColor:"dodgerblue",width:'100%',height:'30%'}}></View> */}
      <TodoApp/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: Platform.OS === "android"? 20 : 0,
  },
});
