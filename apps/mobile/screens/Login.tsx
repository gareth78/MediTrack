import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, TextInput, Card } from 'react-native-paper';
import { signIn, signUp } from '@services/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Card style={{ padding: 16 }}>
        <TextInput label="Email" value={email} onChangeText={setEmail} />
        <TextInput label="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <Button mode="contained" onPress={() => signIn(email, password)} style={{ marginTop: 16 }}>
          Sign In
        </Button>
        <Button onPress={() => signUp(email, password)} style={{ marginTop: 8 }}>
          Sign Up
        </Button>
      </Card>
    </View>
  );
}
