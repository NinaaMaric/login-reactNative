import React from "react";
import {
  StyleSheet,
  KeyboardAvoidingView,
  SafeAreaView,
} from "react-native";
import Login from "./components/Login";

export default function App() {
  return (
      <KeyboardAvoidingView style={{ flex: 1 }} enabled>
        <SafeAreaView style={styles.container}>
          <Login />
        </SafeAreaView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
});
