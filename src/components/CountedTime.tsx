import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const CountedTime = () => {
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <View style={styles.sectionStyle}>
      <View style={styles.stopwatch}>
      <Stopwatch laps msecs start={isStopwatchStart} options={options} />
      </View>
      <TouchableHighlight
        onPress={() => {
          setIsStopwatchStart(!isStopwatchStart);
          setResetStopwatch(false);
        }}
      >
        <View style={styles.buttonWrapper}>
          {!isStopwatchStart ? (
            <MaterialCommunityIcons
              name="play-circle"
              color={"grey"}
              size={35}
            />
          ) : (
            <MaterialCommunityIcons
              name="stop-circle"
              color={"grey"}
              size={35}
            />
          )}
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  stopwatch: {
    marginLeft: 80,
  }
});

const options = {
  container: {
    // backgroundColor: "#FF0000",
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  text: {
    fontSize: 26,
    color: "#FFF",
  },
  bottonWrapper: {
    flexDirection: 'row'
  }
};
