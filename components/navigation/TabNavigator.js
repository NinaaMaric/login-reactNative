import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Dimensions } from "react-native";
import axios from "axios";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Quotation from "./screens/Quotation";
import Account from "./screens/Account";
import Profile from "./screens/Profile";
import Invoice from './screens/Invoice'
import TabBar from "./TabBar";
import ProfileNavigatior from "./ProfileNavigatior";
import Qrcode from "./screens/Qrcode";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("screen");

const TabNavigator = () => {
  return (
    <View >
      <Tab.Navigator tabBar={(props)=> <TabBar {...props} />}>
        <Tab.Screen name='Quotation' component={Quotation} initialParams={{icon: 'filetext1'}} />
        <Tab.Screen name='Account' component={Account} initialParams={{icon: 'profile'}} />
        <Tab.Screen name='Invoice' component={Invoice} initialParams={{icon: 'layout'}} />
        <Tab.Screen name='QR code' component={Qrcode} initialParams={{icon: 'qrcode'}} />
        <Tab.Screen name='Profile' component={ProfileNavigatior} initialParams={{icon: 'user'}} /> 
      </Tab.Navigator>
      <Text style={{width}}></Text>
      </View >
  );
}
export default TabNavigator;
