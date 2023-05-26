import { StatusBar } from 'expo-status-bar';
import { CustomSafeArea } from './src/components/utility/safe-area.component';
import Navigation from './src/components/navigation';
import { Provider } from 'react-native-paper';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <CustomSafeArea>
          <Navigation />
          <StatusBar style="auto" />
        </CustomSafeArea>
      </PersistGate>
    </Provider>
  );
}
