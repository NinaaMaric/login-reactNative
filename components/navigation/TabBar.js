import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Tab from "./Tab";

const { width } = Dimensions.get("screen");

export default function TabBar({ state, navigation }) {
    const [selected, setSelected] = useState('Quotation')
    
    const { routes } = state;

    const renderColor = (currentTab) => currentTab === selected ? '#2f9fb1': 'black';

    const handlePress = (activeTab, index) =>{
        if(state.index !== index){
            setSelected(activeTab)
            navigation.navigate(activeTab)
     
        }  
    }
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab tab={route} 
            icon={route.params.icon} 
            onPress={ ()=> handlePress(route.name, index)} 
            color={renderColor(route.name)} 
            key={route.key} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: -20,
    width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      borderRadius: 10,
      elevation: 1,
      
  },
});
