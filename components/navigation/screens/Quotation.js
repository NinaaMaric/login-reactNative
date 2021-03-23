import React, { useState, useEffect } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import axios from "axios";

const Quotation = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://sibelogistics.ddns.net:8383/rest/scriptrunner/latest/custom/getDocumentInformation?key=PAR-311"
      )
      .then((response) => {
        /* console.log(response, "RESPONSE"); */
        Alert.alert(JSON.stringify(response.data));
        setData(response.data);
        console.log(response.data);
  /*       response.data.map((d)=>{
          console.log(d, "MAP");
          return <Text > {d} </Text>
        }) */
      })
      .catch((error) => {
        // handle error
        alert(error.message);
      })
      .finally(() => {
        console.log("ulazi");
        setData(data);
      /*   Alert.alert(data) */
        console.log(data);
      })
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>QUOTATION</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Quotation;
