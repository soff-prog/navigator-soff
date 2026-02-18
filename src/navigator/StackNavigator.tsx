import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';
import { Persona2Screen } from '../screens/Persona2Screen';

//Props de navegacion]: especificar los parametros de navegacion
export type RootStackParams = {
  Pantalla1: undefined,
  Pantalla2: undefined,
  Pantalla3: undefined,
  Persona: {id: number, nombre: string, edad: number},
  Persona2: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator /* initialRouteName='Pantalla 1' */
    screenOptions={{
      cardStyle:{
        backgroundColor: 'white'
      },
      /* headerShown:false, */
      headerStyle:{
        elevation: 4
      }
    }}>
      <Stack.Screen name="Pantalla1" options={{title: 'Home'}} component={Pantalla1Screen} />
      <Stack.Screen name="Pantalla2" options={{title:'Lista Productos'}} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla3" options={{title:'Configuraciones'}} component={Pantalla3Screen} />
      <Stack.Screen name="Persona" options={{title:'Lista Personas'}} component={PersonaScreen} />
      <Stack.Screen name="Persona2" options={{title:'Persona 2'}} component={Persona2Screen} />
    </Stack.Navigator>
  );
}