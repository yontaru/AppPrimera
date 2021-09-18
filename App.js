import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from "react-native";

export default function App(){
    return(
      <View style = {styles.container}>
        <Text style = {[styles.RojoGrande]}>Hola</Text>
          <StatusBar style="auto" />
          

        <View>
          <Text style= {[styles.AzulGrande]}>Formatos</Text>
        </View>

        <View>
          <Button title="Presionar" onPress={() => Alert.alert('Presionó botón') }>
            
          </Button>
        </View>

        <View>
          <TextInput>

          </TextInput>
        </View>

      </View>
    );
  }

const styles = StyleSheet.create
({
  container:{
    marginTop: 250,
    flex:1,
    padding: 50,
    backgroundColor: "white",
  },

  AzulGrande:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: "center",
  },

  RojoGrande:{
    color: 'red',
    textAlign: "center",
  },

  CorreoInput:{
    underlineColorAndroid: "transparent",
    placeholder: "Email",
    onChangeText: this.handleEmail,
  },

  DatoNumerico:{

  },

  Alfanumerico:{

  },

  PasswordC:{
    underlineColorAndroid: "transparent",
    placeholder: "Clave",
    placeholderTextColor: "blue",
    onChangeText: this.handlePassword,
  },

});