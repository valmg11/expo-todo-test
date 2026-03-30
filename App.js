import { StatusBar } from "expo-status-bar";
import { useState,  } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { TextInput } from "react-native-web";
import { CheckBox } from "@rneui/themed";


export default function App() {
  let list = [
    {
      description: "Do dishes",
      key: 0,
      checked: false,
    },
    {
      description: "Buy groceries",
      key: 1,
      checked: false,
    },
    {
      description: "Clean room",
      key: 2,
      checked: false,
    },
  ];

  //starts as false
  const [isSelected, setIsSelected] = useState(false);

  //input
  const [text, setText] = useState("");
  //tasks
  const [task, setTask] = useState(list);
  let nextKey = task.length;

  //adding tasks
  function addTask (text) {
    let newTodo = { description: text, key: nextKey, checked: false};
    setTask([...task, newTodo]);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.container}></View>
      <Text>To-Do List</Text>
      <View style={styles.checkboxContainer}>
        <FlatList
          data={task}
          renderItem={({ item }) => (
            <View>
              <CheckBox
                title={item.description}
                checked={isSelected}
                onPress={() => setIsSelected(!isSelected)}
              />
            </View>
          )
        }
          keyExtractor={(item) => item.key}
        />
      </View>
      <View>
        
      </View>

      {/* test for checkbox */}
      <Text>
        Is CheckBox selected: {isSelected ? "👍" : "👎"}
      </Text>

      <TextInput
        placeholder="Add todo item..."
        onChangeText={setText}
        value={text}
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
          marginBottom: 40,
          background: "white",
        }}
      />

      {/* add task button */}
      <Button
        title="add"
        style={[styles.button]}
        onPress={() => {
          addTask(text);
          console.log("item added:", { text }, task);
        }}
        color="blue"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#deb6b6",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 20,
    marginBottom: 500,
  },
  header: {
    fontSize: 25,
    fontFamily: "sans-serif",
  },
  button: {
    marginBottom: 100,
  },
});
