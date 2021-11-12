import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import Connectivity from "./Connectivity";
import { Svg, Rect } from "react-native-svg";
import ResourceSection from "./ResourceSection";

class SecondScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.secondScreen}>
          <ResourceSection />
          {/* <Svg height="200" width="200"> */}
          <Svg height="100%" width="10">
            <Rect
              x="0"
              y="0"
              width="1"
              height="100%"
              stroke="red"
              strokeWidth="0"
              fill="black"
            ></Rect>
          </Svg>
          <Connectivity />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  secondScreen: {
    padding: 50,
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "flex-start",
    border: "5px dotted blue",
  },
});

export default SecondScreen;
