import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Header from "./components/Header";

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

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
