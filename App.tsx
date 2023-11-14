import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image} from 'react-native';

import Profil from './components/Profil';
import Menu from './components/Menu';
import Search from './components/Search';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.top}>
        <Profil />
        <Menu />
      </View>

        <View style={styles.search}>
            <Search />
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#24282F',
  },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 54,
        paddingLeft: 30,
        paddingRight: 30,
    },
    search: {
      display: 'flex',
        marginTop: 30,
        paddingLeft: 30,
        paddingRight: 30,
    },
});
