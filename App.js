import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
enableScreens();

import Home from './src/routes/Home';
import Carrito from './src/routes/Carrito';
import Price from './src/routes/Prices';
import { CartContext } from './src/components/CartContext';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <CartContext>
      <NavigationContainer styles={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="carrito" component={Carrito} />
          <Stack.Screen name="price" component={Price} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
