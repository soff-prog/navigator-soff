import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native'

interface Props extends StackScreenProps<any, any> { };

export const Pantalla1Screen = ({navigation}: Props) => {
    //console.log(props);

  return (
    <View>
        <Text>Pantalla 1 Screen</Text>
        <Button title = 'Ir página 2'
            onPress={()=> navigation.navigate('Pantalla 2')}/>
    </View>
  )
}
