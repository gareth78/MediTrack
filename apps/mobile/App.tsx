import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from '@services/auth';y
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import { useAuth } from '@services/auth';

export default function App() {
  return (
    <AuthProvider>
      <PaperProvider>
        <Main />
      </PaperProvider>
    </AuthProvider>
  );
}

function Main() {
  const { user, initializing } = useAuth();
  if (initializing) return null;
  return user ? <Dashboard /> : <Login />;
}
