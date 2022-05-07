import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EncryptedStorage from 'react-native-encrypted-storage';
import Login from './pages/Login';
import Home from './pages/Home';
import Details from './pages/Details';
import {View, Text} from 'react-native';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: {
    item: {
      id: number;
      name: string;
      cc: string;
      price: string;
      picture: string;
    };
  };
};

function Routes() {
  const [user, setUser] = React.useState('');
  const [loading, setLoading] = React.useState(true);
  const Stack = createStackNavigator();

  React.useEffect(() => {
    EncryptedStorage.getItem('user').then((session: any) => {
      if (session !== undefined) {
        setUser(session);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
