import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
export default function Dashboard(){

    const getDataUsingSimpleGetCall = () => {
        axios
          .get('https://sibelogistics.ddns.net:8383/rest/scriptrunner/latest/custom/getDataVisol')
          /* https://sibelogistics.ddns.net:8383/rest/scriptrunner/latest/custom/getDocumentInformation?key=PAR-311 */
          .then(function (response) {
            console.log(response);
            alert(JSON.stringify(response.data));
            
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
            alert('Finally called');
          });
      };
    

    return(
        <View>
          <Text>  Welcome </Text>
          <TouchableOpacity onPress={getDataUsingSimpleGetCall}>
              <Text>Press</Text>
          </TouchableOpacity>
        </View>
    )
}