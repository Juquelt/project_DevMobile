import { StyleSheet, Text, View, Image } from 'react-native';

export default function Carrousel(){
    return(
        <View>
            <View style={styles.position}>
                <Text style={styles.title}>Populaires</Text>
                <Text style={styles.subtitle}>Nouveaux</Text>
                <Text style={styles.subtitle}>Recommandés</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    position: {
      display: 'flex',
      flexDirection: 'row',
        justifyContent: 'space-around',
    },
    title: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff'
    },
    subtitle: {
        fontSize: 13,
        color: '#7B8395',
    }
})