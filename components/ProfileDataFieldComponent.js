import React from "react";
import { View, Text, StyleSheet } from "react-native";

class ProfileDataFieldComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <View style={styles.titleHorizontalRow} />
        </View>
        <Text style={styles.content}>{this.props.content}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    flexGrow: 0,
    marginRight: 5,
  },
  titleHorizontalRow: {
    flexGrow: 1,
    height: 1,
    backgroundColor: "#9f9f9f",
  },
});

export default ProfileDataFieldComponent;
