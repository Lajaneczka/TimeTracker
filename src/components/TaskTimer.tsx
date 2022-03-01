import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
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
      <TouchableHighlight
        onPress={() => {
          setIsTimerStart(!isTimerStart);
          setResetTimer(false);
        }}
      >
        <View >
          {!isTimerStart ? (
            <MaterialCommunityIcons
              name="play-circle"
              color={"grey"}
              size={35}
            />
          ) : (
            <MaterialCommunityIcons name="stop-circle" color={"grey"} size={35} />
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    marginLeft: 60,
  },
});

const options = {
  container: {
    // backgroundColor: "#FF0000",
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "grey",
    marginLeft: 7,
  },
};
