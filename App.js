/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';

import {
  
  StyleSheet, Text, View,Button
} from 'react-native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App = () => {
  const [compteur,setCompteur]=useState(0);
  return(
    <View style={styles.body}>
      <Text style={styles.header}>Compteur</Text>
      <View style={styles.section}>
        <Text style={styles.compteur}>{compteur}</Text>
      </View>
      <Button title='add' color='#2ec4b6' style={styles.button} onPress={()=>{setCompteur(compteur+1)}}></Button>
    </View>
    )

};

const styles = StyleSheet.create({
  body:{
    backgroundColor:'#ff9f1c',
    flex:1,
    justifyContent:'space-between',
    textAlign:'center',
    color:'#ffffff'
  },
  header:{
    fontSize:25,
    padding:15,
    color:'#ffffff',
    backgroundColor:'#ffbf69',
    textAlign:'center'
  },
  section:{
    alignItems:'center'
  },  
  compteur:{
    width:60,
    height:60,
    textAlign:'center',
    fontSize:30,
    backgroundColor:'#cbf3f0',
    color:'#2ec4b6',

    borderRadius:50,
    textAlignVertical:'center'
  }
});

export default App;
