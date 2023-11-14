import { StyleSheet, Text, View, Image } from 'react-native';

export default function Search() {
    return(
        <View>
            <Text style={styles.title}>Explorons</Text>

            <View style={styles.position}>
                <Text style={styles.category}>Jeux</Text>
                <Image
                    source={require('../assets/search/search.png')}
                       style={styles.imageVector}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
      color: '#7B8395',
        fontSize: 13,
    },
    position: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-between",
    },
    category: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    imageVector: {
        width: 18,
        height: 18,
        marginTop: 10,
    }
})