import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TaskTimer } from "./TaskTimer";

interface Task {
  text: string;
  timeDuration: number | null;
}

export const Task = ({ text, timeDuration }: Task) => {
  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <View style={style.square}></View>
        <Text style={style.itemText}>{text}</Text>
      </View>
      <View>
        <TaskTimer timeDuration={timeDuration} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    paddingBottom: 0,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#4db8ff",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 5,
  },
  itemText: {
    maxWidth: "80%",
    fontSize: 20,
  },
});
