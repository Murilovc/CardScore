/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {Component, useState} from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Button, Alert, TextInput } from 'react-native';

export function App() {
  
  const [texto, setTexto] = useState();
  
  return (
    /*
    <ScrollView>
      <Text>Aula de introdução</Text>
      <Nave/>
      <TextInput
        onChangeText={setTexto}
        value={texto}
      />
      <Button
        title="Pressione"
        color="blue"
        onPress={() => Alert.alert(texto)}
      />
      <Text style={{margin:100}}>Teste1</Text>
      <Text style={{margin:100}}>Teste2</Text>
      <Text style={{margin:100}}>Teste3</Text>
      <Text style={{margin:100}}>Teste4</Text>
      <Text style={{margin:100}}>Teste5</Text>
      <Text style={{margin:100}}>Teste6</Text>
    </ScrollView>
    */
    <View style={estilos.viewExterna}>
      <View style={estilos.viewInterna}></View>
      <View style={estilos.viewInterna}></View>
      <View style={estilos.viewInterna2}>
        <View style={estilos.viewMaisInterna}></View>
        <View style={estilos.viewMaisInterna}></View>
        <View style={estilos.viewMaisInterna}></View>
      </View>
      <View style={estilos.viewInterna}></View>
    </View>
  );
}

class Nave extends Component {
  render() {
    return(
      <View>
        <Image
          source={{uri:'https://www.ufac.br/nave/imagens/logo.png/@@images/b79444d1-a803-4e49-b5da-98228cf1e2fd.png'}}
          style={{ width: 200, height:80}}
        />
        <Text>NaveTech</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  viewInterna: {
    flex: 1,
    /*width: '50%',*/
    /*height: 50,*/
    backgroundColor: 'blue',
    margin: 10
  },
  viewInterna2: {
    flex: 2,
    backgroundColor: 'red',
    margin: 10,
    flexDirection: 'row'
  },
  viewMaisInterna: {
    flex: 1,
    backgroundColor: 'black',
    margin: 10,
    borderRadius: 50
  },
  viewExterna: {
    flex: 1,
    backgroundColor: 'yellow'
  },



  textBranco: {
    color: '#ffffff'
  },
  textInput: {
    backgroundColor: 'gray'
  },
  viewEscura: {
    backgroundColor: '#252526',
    flex:1,
    height:'100%'
  }

})



export default function Tela() {
  return (
    <ScrollView>
      <MarcadorPlayer></MarcadorPlayer>
      <MarcadorPlayer></MarcadorPlayer>
      <MarcadorPlayer></MarcadorPlayer>
    </ScrollView>
  );
}

class MarcadorPlayer extends Component {

  nome : String = "Jogador";

  render() {
    return(
      <View style={estilos.viewEscura}>
        <Text style={estilos.textBranco}>{this.nome}</Text>
        <Button
          title="+"
        />
        <TextInput style={estilos.textInput}>0</TextInput>
        <Button
          title="-"
        />
      </View>
    );
  }
}