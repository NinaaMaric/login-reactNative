import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
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
        // alert(JSON.stringify(response.data));
        setData(response.data);
        console.log(response.data);
        response.data.map((d)=>{
          console.log(d, "MAP");
          return <Text > {d} </Text>
        })
      })
      .catch((error) => {
        // handle error
        alert(error.message);
      })
      .finally(() => {
        console.log("ulazi");
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>QUOTATION</Text>
{/* <Text>
      {data &&
        data.map((d) => {
          console.log(d, "MAPIRANJE");
          return <Text> {d.field} </Text>;
        })}
</Text>
 */}
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
