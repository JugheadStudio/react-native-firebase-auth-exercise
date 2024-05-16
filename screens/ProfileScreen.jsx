import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'

import {handleSignOut} from '../services/authService';
import { auth } from '../firebase';

const ProfileScreen = () => {

  const [userEmail, setUserEmail] = useState(null);

  // TODO: handle logout
  const handleLogout = () => {
    handleSignOut()
  }

  const fetchUserEmail = () => {
    const user = auth.currentUser; // Get the current user
    if (user) {
        setUserEmail(user.email); // Set user email in state
    }
  }

  useEffect(() => {
    fetchUserEmail();
  }, []);

    return (
        <SafeAreaView>
            <View style={{padding:20}}>
                <Text>Profile</Text>

                {/* TODO: Show logged in user info */}
                <Text>{userEmail}</Text>
                <Text>Username here</Text>

                <Button 
                    title="Sign Out"
                    color="green"
                    onPress={handleLogout} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen