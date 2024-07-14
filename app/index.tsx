import { 
  Text, 
  View, 
  StyleSheet, 
  KeyboardAvoidingView, 
  TextInput, 
  TouchableOpacity, 
  Platform } from "react-native";
import Tasks from "@/components/tasks";
import React, { useState } from "react";

export default function Index() {
  const [task, setTask] = useState<string>(''); // Change the task name

  const handleAddTask = () => {
    console.log(task);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks:</Text>
      <View style={styles.items}>
        {/* Task list */}
        <Tasks name="Task 1"/>
        <Tasks name='Task 2'/>
      </View>

      {/* Add new tasks */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
        >
        <TextInput style={styles.input} placeholder={'Write a task'}
        value={task}
         onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addButton}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 70,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 40,
    marginBottom: 10,
  },
  input:{
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f8f8f8',
    width: 250,
    borderRadius: 30,
    borderWidth: 1,
  },
  addButton:{
    width: 50,
    paddingVertical: 15,
    borderWidth: 1, 
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  }
  });