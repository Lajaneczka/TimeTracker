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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface TaskProps {
  text: string;
  time: null | number;
}

export default function App() {
  const [task, setTask] = useState<TaskProps>({ text: "", time: null });
  const [taskItems, setTaskItems] = useState<TaskProps[]>([]);

  const handleAddTask = (): void => {
    setTaskItems([...taskItems, task]);
    setTask({ text: "", time: null });
  };

  let total = taskItems.reduce((prev, curr) => prev + curr.time, 0) * 60;

  const convert = (x: number) => {
    return Math.floor(x / 60) + "h" + ":" + (x % 60 ? x % 60 : "00") + "min";
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <View style={styles.planningItems}>
            <Text>Planning</Text>
            <View>
              <CountedTime />
            </View>
          </View>
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
            <View style={styles.addWrapperTask}>
              <TouchableOpacity onPress={() => handleAddTask()}>
                <View style={styles.plus}>
                  <MaterialCommunityIcons
                    name="plus-circle"
                    color={"grey"}
                    size={35}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.textStopwatch}>Today: {convert(total)}</Text>

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
        <View style={styles.moreButton}>
          <TouchableOpacity>Load more</TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1d1e0",
    opacity: 0.8,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  planningItems: {
    flexDirection: "row",
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStopwatch: {
    fontSize: 18,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 150,
  },
  plus: {
    marginRight: 50,
  },
  addWrapperTask: {
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  moreButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 150,
    marginBottom: 50,
    marginTop: 200,
    marginHorizontal: 100,
  },
});
