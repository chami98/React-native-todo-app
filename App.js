import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Alert,
  Keyboard,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    {
      key: 1,
      text: "Do something nice for someone I care about",
      completed: true,
      userId: 26,
    },
    {
      key: 2,
      text: "Memorize the fifty states and their capitals",
      completed: false,
      userId: 48,
    },
    {
      key: 3,
      text: "Watch a classic movie",
      completed: false,
      userId: 4,
    },
    {
      key: 4,
      text: "Contribute code or a monetary donation to an open-source software project",
      completed: false,
      userId: 48,
    },
    {
      key: 5,
      text: "Solve a Rubik's cube",
      completed: false,
      userId: 31,
    },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != key));
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [
        { text: text, key: Math.random().toString() },
        ...prevTodos,
      ]);
    } else {
      Alert.alert("OOPS", "Todos Must be over 3 Characters long", [
        { text: "Understood", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("Keyboard Dismissed");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} todos={todos} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
