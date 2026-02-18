import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreens } from '../screens/SettingsScreens';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { stylesGlobal } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerPersonalizadoNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <MenuLateral1 {...props}/>}>
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{title:'Comfiguraciones'}} component={SettingsScreens} />
    </Drawer.Navigator>
  );
}

///componente Menu Lateral
const MenuLateral1 = ({ navigation }: DrawerContentComponentProps) =>{
    return(
        <DrawerContentScrollView>
            <View style={stylesGlobal.containerAvatar}>
                <Image source={{
                    uri:'https://www.10duke.com/wp-content/uploads/2022/10/user-access-management.png'
                }} style={stylesGlobal.avatar}/>
            </View>

            <View style= {stylesGlobal.containerMenu}>
                <TouchableOpacity style={stylesGlobal.menuButton}
                onPress={() =>navigation.navigate('StackNavigator')}>
                    <Text style={stylesGlobal.menuText}>Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesGlobal.menuButton}
                onPress={() =>navigation.navigate('Settings')}>
                    <Text style={stylesGlobal.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}