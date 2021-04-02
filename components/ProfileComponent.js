import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import axios from "axios";
import UserDataComponent from "./UserDataComponent";

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

  renderProfilePicture() {
    const url = this.state.userResult.image + "?date=" + Date.now()
    return (
      <Image
        style={styles.profileImage}
        source={{ uri: url }}
        defaultSource={require("../assets/img/profile-default.jpg")}
      />
    );
  }

  renderRefreshButton() {
    if (this.state.isRequestFulfilled) {
      return (
        <Button title="Refresh data" onPress={() => this.refreshUserData()} />
      );
    }

    return <Button title="Loading..." disabled />;
  }

  renderUserData() {
    return (
      <UserDataComponent
        name={this.state.userResult.name}
        email={this.state.userResult.email}
        phone={this.state.userResult.phone}
        nutritionist={this.state.userResult.nutritionist}
      />
    );
  }

  renderProfile() {
    return (
      <View style={styles.flexContainer}>
        {this.renderProfilePicture()}
        <View style={styles.flexPanel}>
          {this.renderRefreshButton()}
          <View style={{ width: "100%", marginBottom: 30 }} />
          {this.renderUserData()}
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.requestUserData();
  }

  render() {
    return <View>{this.renderProfile()}</View>;
  }
}

export default ProfileComponent;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "flex-start",
    alignItems: "center",
  },
  flexPanel: {
    flex: 2,
    width: "100%",
  },
  profileImage: {
    height: 300,
    width: 300,
    backgroundColor: "#2294d2",
    borderBottomLeftRadius: 300,
    borderBottomRightRadius: 300,
    borderTopRightRadius: 300,
    borderTopLeftRadius: 300,
    resizeMode: "cover",
    marginBottom: 20,
  },
});
