import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { CountedTime } from "./src/components/CountedTime";
import { Task } from "./src/components/Task";


export default function App() {
  const [task, setTask] = useState({ text: "", time: null });
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask({ text: "", time: null });
  };

  let total = taskItems.reduce((prev, curr) => prev + curr.time, 0) * 60;

  const convert = (x) => {
    return Math.floor(x / 60) + "h" + ":" + (x % 60 ? x % 60 : "00") + "min";
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <CountedTime />

        <Text>Today: {convert(total)}</Text>

        <View style={styles.writeTaskWrapper}>
          <View>
            <TextInput
              style={styles.input}
              placeholder={"Write a task"}
              value={task.text}
              onChangeText={(text) => setTask({ ...task, text: text })}
            />
            <TextInput
              style={styles.input}
              placeholder={"Write a time"}
              value={task.time}
              onChangeText={(time) => setTask({ ...task, time: time })}
            />
          </View>
          <View>
            <TouchableOpacity onPress={() => handleAddTask()}>
              <View style={styles.addWrapperTask}>
                <Text style={styles.addText}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <Task
                key={index}
                text={item.text}
                timeDuration={item.time}
              ></Task>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6ffff",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 20,
  },
  writeTaskWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapperTask: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
  },
  addText: {},
});
