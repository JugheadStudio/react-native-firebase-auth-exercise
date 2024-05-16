import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

// TODO: Navigation Container

const Stack = createNativeStackNavigator();

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
        console.log('User logged in - ' + user.email);
      } else {
        setLoggedIn(false)
        console.log('No user loggged in');
      }
    })
    return unsubscribe
  }, [])

  return (
    // <ProfileScreen />
    <>
      {loggedIn ? (
        <ProfileScreen/>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}

