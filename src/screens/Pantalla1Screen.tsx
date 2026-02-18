import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;

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
    const persona2: Persona = {
      id: 2,
      nombre: 'Sofia',
      edad: 19
    }
    
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title} >Pantalla 1 Screen</Text>
        <Button title = 'Ir página 2'
            onPress={()=> navigation.navigate('Pantalla2')}/>
        <Button title='Ir persona'
        onPress={()=> navigation.navigate('Persona', persona)}/>
        <Button title='Ir persona2'
        onPress={()=> navigation.navigate('Persona', persona2)}/>
    </View>
  )
}
