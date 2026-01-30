import React, { useEffect, useState } from 'react';
import { AuthProvider } from './src/contexts/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

const App: React.FC = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const init = async () => {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 800);

      return () => clearTimeout(timer);
    };

    init();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
};

export default App;
