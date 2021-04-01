import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import ProfileComponent from "../components/ProfileComponent";

class HomeView extends React.Component {
  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <ProfileComponent />
        <StatusBar style="auto" />
      </ScrollView>
    );
  }
}

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6f5ff",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
});
