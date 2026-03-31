import { StatusBar } from "expo-status-bar";
import { useState,  } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { TextInput } from "react-native-web";
import { CheckBox } from "@rneui/themed";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function App() {
  let list = [
    {
      description: "Do dishes",
      key: 0,
      completed: false,
    },
    {
      description: "Buy groceries",
      key: 1,
      completed: false,
    },
    {
      description: "Clean room",
      key: 2,
      completed: false,
    },
  ];

  //starts as false
  // const [isChecked, setIsChecked] = useState(false);

  //input
  const [text, setText] = useState("");
  //tasks
  const [task, setTask] = useState(list);
  let nextKey = task.length;

  //task check
  const handleCheck = (key) => {
    const newCheck = task.map((item) => {
      if (item.key === key) {
        return {...item, completed: !item.completed};
      } 
      return item;
    });
    setTask(newCheck);
  }

  //adding tasks
  function addTask (text) {
    let newTodo = { description: text, key: nextKey, completed: false};
    setTask([...task, newTodo]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container}></View>

      <Text style={styles.title}>To-Do List</Text>
      
      <View style={styles.checkboxContainer}>
        <FlatList
          data={task}
          renderItem={({ item }) => (
            <View>

              <CheckBox
                title={item.description}
                checked={item.completed}
                // onPress={() => setIsChecked(!isChecked)}
                onPress={() => {
                  // setIsChecked(!isChecked)
                  // style={ textDecorationLine: 'line-through' }
                  handleCheck(item.key);
                  // item.checked = !item.checked;
                  console.log(item.key, item.completed)
                }}
                checkedIcon={<FontAwesome name="check-square" size={25} color="#ff9a56" />}
                uncheckedIcon={<FontAwesome name="square-o" size={25} color="#cccccc" />}
              />
            </View>
          )
        }
          keyExtractor={(item) => item.key}
        />
      </View>

      <TextInput
        placeholder="Add todo item..."
        onChangeText={setText}
        value={text}
        style={styles.input}
      />

      {/* add task button */}
      <Button
        title="add"
        // style={[styles.button]}
        onPress={() => {
          addTask(text);
          console.log("item added:", { text }, task);
        }}
        color="#ff9a56"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 500,
  },
  header: {
    fontSize: 25,
    fontFamily: "sans-serif",
  },
  // button: {
  //   marginBottom: 100,
  // },
  input: {
    height: 40,
    padding: 10,
    marginHorizontal: 8,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 7,
    backgroundColor: "white",
  },
  title: {
    color: "#ff9a56",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  }
});
