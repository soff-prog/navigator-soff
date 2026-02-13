import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1Screen';
import { Pantalla2Screen } from '../screens/Pantalla2Screen';
import { Pantalla3Screen } from '../screens/Pantalla3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createStackNavigator();

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
      <Stack.Screen name="Pantalla 1" options={{title: 'Home'}} component={Pantalla1Screen} />
      <Stack.Screen name="Pantalla 2" options={{title:'Lista Productos'}} component={Pantalla2Screen} />
      <Stack.Screen name="Pantalla 3" options={{title:'Configuraciones'}} component={Pantalla3Screen} />
      <Stack.Screen name="Persona" options={{title:'Lista Personas'}} component={PersonaScreen} />
    </Stack.Navigator>
  );
}