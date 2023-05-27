import { StatusBar } from 'expo-status-bar';
import { CustomSafeArea } from './src/components/utility/safe-area.component';
import Navigation from './src/components/navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CustomSafeArea>
            <Navigation />
            <StatusBar style="auto" />
          </CustomSafeArea>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
