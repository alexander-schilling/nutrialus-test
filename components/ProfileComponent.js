import React from "react";
import { View, StyleSheet } from "react-native";
import axios from "axios";

class ProfileComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userRequestConfig: {
        method: "get",
        url: "https://0q27loouph.execute-api.us-east-1.amazonaws.com",
      },
      userResult: this.getDefaultUserResult(),
      isRequestFulfilled: false,
      status: 404,
    };
  }

  getDefaultUserResult() {
    return {
      name: "Loading...",
      email: "Loading...",
      phone: "Loading...",
      nutritionist: "Loading...",
      image: require("../assets/img/profile-default.jpg"),
    };
  }

  updateStateFromRequest(resp) {
    if (resp.status == 200) {
      this.setState({
        userResult: {
          name: resp.data.name,
          email: resp.data.email,
          phone: resp.data.phone,
          nutritionist: resp.data.nutritionist,
          image: resp.data.image,
        },
      });
    }

    this.setState({
      isRequestFulfilled: true,
      status: resp.status,
    });
  }

  requestUserData() {
    axios(this.state.userRequestConfig).then((resp) => {
      this.updateStateFromRequest(resp);
    });
  }

  refreshUserData() {
    this.setState({
      userResult: this.getDefaultUserResult(),
      isRequestFulfilled: false,
      status: 404,
    });

    this.requestUserData();
  }

  render() {
    return <View></View>;
  }
}

export default ProfileComponent;

const styles = StyleSheet.create({});
