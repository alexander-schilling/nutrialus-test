import React from "react";
import { View, Text } from "react-native";

class UserDataComponent extends React.Component {
  render() {
    return (
      <View>
        <Text>Name: {this.props.name}</Text>
        <Text>Email: {this.props.email}</Text>
        <Text>Phone number: {this.props.phone}</Text>
        <Text>Nutritionist: {this.props.nutritionist}</Text>
      </View>
    );
  }
}

export default UserDataComponent;
