import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

import { Stopwatch } from "react-native-stopwatch-timer";

export const CountedTime = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View style={styles.sectionStyle}>
      <Stopwatch laps msecs start={isStopwatchStart} options={options} />
      <TouchableHighlight
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
        }}
      >
        <Text style={styles.buttonText}>
          {!isStopwatchStart ? "START" : "STOP"}
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
