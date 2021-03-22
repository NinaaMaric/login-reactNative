import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Tab({color, tab, icon, onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
           {icon && <AntDesign name={icon} size={20} color={color } />}
            <Text style={{color}}>
                {tab.name}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
   container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
   }
  });
