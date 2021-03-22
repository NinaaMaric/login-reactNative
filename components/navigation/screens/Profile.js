import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Profile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile..</Text>
            <Button onPress={()=> navigation.navigate('Test')} title="move to another screen"></Button>
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
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default Profile
