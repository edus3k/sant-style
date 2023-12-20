import React, { useState } from "react";
import { 
StyleSheet, 
View,
Text,
TextInput
} from 'react-native';

export type Loading = {
  state: boolean
}

const InEmail = () =>{
  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <View style={styles.input}>
        <TextInput
            
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 14,
    padding: 6,
    marginVertical: 12
  }
});

export default InEmail;