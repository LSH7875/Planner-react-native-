import React from 'react';
import RootProvider from './Providers';
import RootStackNavigation from './components/navigations/RootStackNavigator';

const App = () => {
  return <RootStackNavigation />;
};

const ProviderWrapper = () => {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
};

export default ProviderWrapper;
