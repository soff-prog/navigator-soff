import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { };

interface Persona{
  id: number;
  nombre: string;
  edad: number
}

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props);
    //Crear objeto
    const persona: Persona = {
      id: 1,
      nombre: 'Viviana',
      edad: 34
    }
    
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title} >Pantalla 1 Screen</Text>
        <Button title = 'Ir página 2'
            onPress={()=> navigation.navigate('Pantalla 2')}/>
        <Button title='Ir persona'
        onPress={()=> navigation.navigate('Persona')}/>
    </View>
  )
}
