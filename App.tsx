import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

import Profil from './components/Profil';
import Menu from './components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    <Profil />
    <Menu />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24282F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
