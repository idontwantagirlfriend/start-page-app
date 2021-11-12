import React from "react";
import { View, Text, StyleSheet } from "react-native";

class Footer extends React.Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text>Copyright footer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Footer;
