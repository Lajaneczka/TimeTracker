import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Timer } from "react-native-stopwatch-timer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const TaskTimer = ({ timeDuration }) => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);

  let hours = parseInt(timeDuration);
  let milliseconds = hours * 60 * 60 * 1000;

  return (
    <View style={styles.sectionStyle}>
      <Timer
        totalDuration={milliseconds}
        msecs
        start={isTimerStart}
        options={options}
      />
      <TouchableHighlight
        onPress={() => {
          setIsTimerStart(!isTimerStart);
          setResetTimer(false);
        }}
      >
        <Text style={styles.buttonText}>
          {!isTimerStart ? (
            <MaterialCommunityIcons
              name="play-circle"
              color={"black"}
              size={26}
            />
          ) : (
            <MaterialCommunityIcons name="stop-circle" color={"black"} size={26} />
          )}
        </Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  container: {
    backgroundColor: "#FF0000",
    padding: 5,
    borderRadius: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "#FFF",
    marginLeft: 7,
  },
};
