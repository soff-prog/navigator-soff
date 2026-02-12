import React from 'react'
import { Button, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const Pantalla2Screen = () => {
    //hook useNavigation: permite navegar de ua pantalla a otra
    const navigation = useNavigation();

  return (
    <View style={stylesGlobal.container}>
            <Text style={stylesGlobal.title}>Pantalla 2 Screen</Text>
            <Button title='Ir Pantalla 3'
            onPress={() => navigation.dispatch(CommonActions.navigate({name:'Pantalla 3'}))}/>
        </View>
  )
}
