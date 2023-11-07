import { StyleSheet, Text, View, Image } from 'react-native';
import {StatusBar} from "expo-status-bar";

export default function Profil() {
    return (
    <View style={styles.profil}>

        <Image></Image>
        <Text style={styles.new}>Nouveau</Text>
        <Text>Nouveau</Text>


    </View>
    )
}

const styles = StyleSheet.create({
    profil: {

    },
    new: {
      backgroundFont: '#7B8395',
        fontFamily: 'Open Sans',

    },
});
