import { StatusBar } from 'expo-status-bar';
import { CustomSafeArea } from './src/components/utility/safe-area.component';
import Navigation from './src/components/navigation';

export default function App() {
  return (
    <CustomSafeArea>
      <Navigation />
      <StatusBar style="auto" />
    </CustomSafeArea>
  );
}
