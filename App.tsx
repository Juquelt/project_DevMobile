import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

import Home from './pages/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <Home />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24282F',
  },
});
