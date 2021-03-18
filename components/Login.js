import axios from "axios";
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";

import Spinner from "react-native-loading-spinner-overlay";

import APIKit, { setClientToken } from "./APIKIT";
import Dashboard from "./Dashboard";

const initialState = {
  username: "",
  password: "",
  errors: {},
  isAuthorized: false,
  isLoading: false,
};

class Login extends Component {
  state = initialState;

  componentWillUnmount() {}

  onUsernameChange = (username) => {
    this.setState({ username });
  };

  onPasswordChange = (password) => {
    this.setState({ password });
  };

  onPressLogin() {
    const { username, password } = this.state;
    const payload = { username, password };
    console.log(payload);

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      setClientToken(data.token);
      this.setState({ isLoading: false, isAuthorized: true });
    };

    const onFailure = (error) => {
      console.log(error && error.response, "RESPONSE");
      this.setState({ errors: error.response.data, isLoading: false });
    };

    // Show spinner when call is made
    this.setState({ isLoading: true });

    APIKit.get("/rest/scriptrunner/latest/custom/getDataVisol", payload)
      .then(onSuccess)
      .catch(onFailure);
  }

  getNonFieldErrorMessage() {
    // Return errors that are served in `non_field_errors`
    let message = null;
    const { errors } = this.state;
    if (errors.non_field_errors) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {errors.non_field_errors.map((item) => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  getErrorMessageByField(field) {
    // Checks for error message in specified field
    // Shows error message from backend
    let message = null;
    if (this.state.errors[field]) {
      message = (
        <View style={styles.errorMessageContainerStyle}>
          {this.state.errors[field].map((item) => (
            <Text style={styles.errorMessageTextStyle} key={item}>
              {item}
            </Text>
          ))}
        </View>
      );
    }
    return message;
  }

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.containerStyle}>
        <Spinner visible={isLoading} />

        {!this.state.isAuthorized ? (
          <View>
            <View style={styles.logotypeContainer}>
              <Image
                source={require("../assets/Logo.png")}
                style={styles.logotype}
              />
            </View>
            <View style={styles.wrapp}>
              <TextInput
                style={styles.input}
                value={this.state.username}
                maxLength={256}
                placeholder="Enter username"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                onSubmitEditing={(event) =>
                  this.passwordInput.wrappedInstance.focus()
                }
                onChangeText={this.onUsernameChange}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
              />

              {this.getErrorMessageByField("username")}

              <TextInput
                ref={(node) => {
                  this.passwordInput = node;
                }}
                style={styles.input}
                value={this.state.password}
                maxLength={40}
                placeholder="Enter password"
                onChangeText={this.onPasswordChange}
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="done"
                blurOnSubmit
                onSubmitEditing={this.onPressLogin.bind(this)}
                secureTextEntry
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
              />

              {this.getErrorMessageByField("password")}

              {this.getNonFieldErrorMessage()}

              <TouchableOpacity
                style={styles.loginButton}
                onPress={this.onPressLogin.bind(this)}
              >
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
           <Dashboard />
          </View>
        )}
      </View>
    );
  }
}

export default Login;

// Define styles here
const styles = StyleSheet.create({
  innerContainer: {
    marginBottom: 32,
  },
  logotypeContainer: {
    alignItems: "center",
  },
  logotype: {
    maxWidth: 280,
    maxHeight: 50,
    marginTop: 50,
    resizeMode: "contain",
    alignItems: "center",
  },
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f7f7f7",
  },
  wrapp: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 50,
    padding: 12,
    minWidth: 300,
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: 12,
  },
  loginButton: {
    borderColor: "#35c1d7",
    backgroundColor: '#35c1d7',
    borderWidth: 2,
    padding: 12,
    marginTop: 15,
    minWidth: 220,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorMessageContainerStyle: {
    marginBottom: 8,
    backgroundColor: "#fee8e6",
    padding: 8,
    borderRadius: 4,
  },
  errorMessageTextStyle: {
    color: "#db2828",
    textAlign: "center",
    fontSize: 12,
  },
});
