/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { CheckBox, Icon } from "@rneui/themed";
import uuid from 'react-native-uuid';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
const [tasks, setTasks] = useState([])
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
const handleBlur = ({nativeEvent: event}) => {
console.log(event.text)
    setTasks(ts => [...ts, {id: uuid.v4(), task: event.text, done: false}])

}

const handleCheck = (id) => {
let foundElement = tasks.filter(task => task.id === id)[0]
setTasks(prevTs => prevTs.map(t => {if(t.id === id) {t.done = !t.done} return t}))
}


  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TextInput onSubmitEditing={handleBlur} />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {tasks.map((task)=> <CheckBox
          key={task.id}
          title={task.task}
                                      center
                                      checkedIcon={
                                        <Icon
                                          name="check-box"
                                          type="material"
                                          color="green"
                                          size={25}
                                          iconStyle={{ marginRight: 10 }}
                                        />
                                      }
                                      uncheckedIcon={
                                        <Icon
                                          name="check-box-outline-blank"
                                          type="material"
                                          color="grey"
                                          size={25}
                                          iconStyle={{ marginRight: 10 }}
                                        />
                                      }
                                      checked={task.done}
                                      onPress={()=> handleCheck(task.id)}
                                    />) }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
