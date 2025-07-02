import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { signOut } from '@services/auth';

export default function Dashboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to MediTrack!</Text>
      <Button onPress={signOut} style={{ marginTop: 16 }}>
        Sign Out
      </Button>
    </View>
  );
}
