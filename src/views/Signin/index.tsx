import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { 
StyleSheet, 
View,
Text,
ViewStyle,
} from 'react-native';

import InEmail from "@components/InEmail";
import InPassword from "@components/InPassword";

export type Loading = {
  state: boolean
}

const Signin = () =>{
  return (
    <View style={styles.container}>
      <View style={styles.name_app}>
        <Text style={styles.logo}>$$</Text>
        <Text style={styles.name}>SantStyle</Text>
      </View>
      <View style={styles.container_inputs}>
        <InEmail
          backColor="#FFF"
          labelColor="#000"
          in={''}
          erro={''}
        />
        <InPassword
          backColor="#FFF"
          labelColor="#000"
          in={''}
          erro={''}
        />
      </View>
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
  name_app: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 42,
    fontWeight: '600',
  },
  name: {
    fontSize: 36,
    fontWeight:'500',
    fontStyle: 'italic',
    marginStart: '70%',
    marginBottom: 32
  },
  container_inputs: {
    width: '90%'
  }
});

export default Signin;