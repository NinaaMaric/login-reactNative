import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from "axios";
const Quotation = () => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.text}>QUOTATION</Text>
        </View>
    )
}
const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
  },
  text:{
      fontSize: 20,
      fontWeight: 'bold',
  }
})

export default Quotation


