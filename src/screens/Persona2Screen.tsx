import React from 'react'
import { Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appTheme'
import { useRoute } from '@react-navigation/native'

interface RouterParams{
    id: number;
    nombre: string;
    edad: number;
}

export const Persona2Screen = () => {
    //hook useRoute: permite capturar los prametros de navegacion
    const route = useRoute();
    //console.log(route.params);
    const params = route.params as RouterParams
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Persona2 Screen</Text>
        <Text>{params.id}</Text>
        <Text>{params.nombre}</Text>
        <Text>{params.edad}</Text>
    </View>
  )
}
