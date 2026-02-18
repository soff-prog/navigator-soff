import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

interface Persona{
  id: number;
  nombre: string;
  edad: number;
}

export const Pantalla2Screen = () => {
    //hook useNavigation: permite navegar de ua pantalla a otra
    const navigation = useNavigation();
    //crear objeti
    const persona: Persona={
      id: 2,
      nombre: "Karen",
      edad: 45
    }
  return (
    <View style={stylesGlobal.container}>
            <Text style={stylesGlobal.title}>Pantalla 2 Screen</Text>
            <Button title='Ir Pantalla 3'
            onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla3'}))}/>
            <Button title='Ir Persona 2'
            onPress={() => navigation.dispatch(CommonActions.navigate({name:'Persona2', params:persona}))}/>
        </View>
  )
}
