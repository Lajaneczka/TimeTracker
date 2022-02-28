import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { TaskTimer } from "./TaskTimer";

export const Task = ({ text, timeDuration }) => {
  // const [selectedValue, setSelectedValue] = useState("java");

  return (
    <View style={style.item}>
      <View style={style.itemLeft}>
        <View style={style.square}></View>
        <Text style={style.itemText}>{text}</Text>

        <TaskTimer timeDuration={timeDuration} />
   
      </View>
      <View style={style.circular}></View>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  // square: {
  //     width: 24,
  //     height: 24,
  //     backgroundColor: '#4db8ff',
  //     opacity: 0.4,
  //     borderRadius: 5,
  //     marginRight: 15,
  // },
  itemText: {
    maxWidth: "80%",
  },
  // circular: {
  //     width: 12,
  //     height: 12,
  //     borderColor: '#4db8ff',
  //     borderWidth: 2,
  //     borderRadius: 5,
  // }
});
