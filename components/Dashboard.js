import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://sibelogistics.ddns.net:8383/rest/scriptrunner/latest/custom/getDocumentInformation?key=PAR-311"
      )
      /* https://sibelogistics.ddns.net:8383/rest/scriptrunner/latest/custom/getDocumentInformation?key=PAR-311 */
      .then(function (response) {
        /*   console.log(response, "RESPONSE"); */
        // alert(JSON.stringify(response.data));
        setData(response.data);
        console.log(response.data, "RESPONSE DATA");
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        alert("Finally called");
        setData(data);
        console.log(data, "FINALYY");
      });
  }, []);

  return (
    <View>
      <Text> Welcome </Text>
      <TouchableOpacity>
        <Text>Press</Text>
      </TouchableOpacity>

      <Text></Text>
    </View>
  );
}
