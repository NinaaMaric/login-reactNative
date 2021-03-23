import axios from "axios";
import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  ImageBackground,
  Keyboard,
} from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import APIKit, { setClientToken } from "./APIKIT";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";

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
    Keyboard.dismiss();
    const { username, password } = this.state;
    const payload = { username, password };
    console.log(payload);
   

    const onSuccess = ({ data }) => {
      // Set JSON Web Token on success
      setClientToken(data.token);
      this.setState({ isLoading: false, isAuthorized: true });
    };

    const onFailure = (error) => {
      //console.log(error && error.response, "RESPONSE kod login");
      this.setState({ errors: error.response.data, isLoading: false });
      Alert.alert(error.response.data);
      console.log(error.response.data, "ERROR");
    };

    this.setState({ isLoading: true });

    APIKit.get(
      `/rest/scriptrunner/latest/custom/genToken?ko=${username}&si=${password}`,
      payload
    )
      .then(onSuccess)
      .catch(onFailure);
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
              <ImageBackground
                source={require("../assets/vision.jpg")}
                style={{ width: "100%", height: "70%", opacity: 0.8 }}
                imageStyle={{ resizeMode: "contain" }}
              ></ImageBackground>
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
                /*   onSubmitEditing={(event) =>
                  this.passwordInput.wrappedInstance.focus()
                } */
                onChangeText={this.onUsernameChange}
                underlineColorAndroid="transparent"
                placeholderTextColor="#999"
              />

              <TextInput
                /* ref={(node) => {
                  this.passwordInput = node;
                }} */
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

              <TouchableOpacity
                style={styles.loginButton}
                onPress={this.onPressLogin.bind(this)}
              >
                <Text style={styles.loginButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <NavigationContainer>
            <TabNavigator />
          </NavigationContainer>
        )}
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  innerContainer: {
    marginBottom: 32,
  },
  logotypeContainer: {
    alignItems: "flex-end",
  },
  logotype: {
    minWidth: 220,
    maxHeight: 35,
    marginTop: 8,
    marginBottom: 10,
    resizeMode: "contain",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  containerStyle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fbff99",
  },
  wrapp: {
    height: 20,
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
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    marginBottom: 15,
    elevation: 1,
  },
  loginButton: {
    borderColor: "#35c1d7",
    backgroundColor: "#35c1d7",
    borderWidth: 2,
    padding: 15,
    marginTop: 15,
    minWidth: 220,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
