import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

const RootNavigator: React.FC = () => {
  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return null;
  }

  return isLoggedIn ? <HomeScreen /> : <LoginScreen />;
};

export default RootNavigator;
