import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
View,
Text,
ViewStyle,
} from 'react-native';

import InEmail from "@components/InEmail";

export type Loading = {
  state: boolean
}

const Signin = () =>{
  return (
    <View style={styles.container}>
      <Text>aa</Text>
      <InEmail/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
});

export default Signin;