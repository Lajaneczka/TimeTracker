import React, { useState } from "react";
import { StyleSheet, View, TouchableHighlight } from "react-native";
import { Timer } from "react-native-stopwatch-timer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

interface TaskTimerProps {
  timeDuration: number | null;
}

export const TaskTimer = ({ timeDuration }: TaskTimerProps) => {
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
      <View style={styles.button}>
      <TouchableHighlight
        onPress={() => {
          setIsTimerStart(!isTimerStart);
          setResetTimer(false);
        }}
      >
        {!isTimerStart ? (
          <MaterialCommunityIcons name="play-circle" color={"grey"} size={35} />
        ) : (
          <MaterialCommunityIcons name="stop-circle" color={"grey"} size={35} />
        )}
      </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    width: 100,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginLeft: 150,
  },
  button: {
    marginHorizontal: 50,
  }
});

const options = {
  container: {
    width: 60,
    alignItems: "center",
    paddingLeft: 50,
  },
  text: {
    fontSize: 20,
    color: "grey",
  },
};
