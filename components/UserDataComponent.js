import React from "react";
import { View } from "react-native";
import ProfileDataFieldComponent from "./ProfileDataFieldComponent";

class UserDataComponent extends React.Component {
  render() {
    return (
      <View>
        <ProfileDataFieldComponent title="Name" content={this.props.name} />
        <ProfileDataFieldComponent title="Email" content={this.props.email} />
        <ProfileDataFieldComponent
          title="Phone number"
          content={this.props.phone}
        />
        <ProfileDataFieldComponent
          title="Nutritionist"
          content={this.props.nutritionist}
        />
      </View>
    );
  }
}

export default UserDataComponent;
