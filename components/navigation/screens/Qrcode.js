import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Qrcode = () => {
  
    return (
        <View style={styles.container}>
            <Text style={styles.text}> QR CODE </Text>
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

export default Qrcode


