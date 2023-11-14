import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profil() {
    return (
    <View style={styles.profil}>
        <View style={styles.circleProfil}>
            <Image
                source={require('../assets/home/imageProfil.png')}
                style={styles.imageProfil}
            />
        </View>

        <View style={styles.text}>
            <Text style={styles.new}>Nouveau</Text>

            <View style={styles.line}>
                <Text style={styles.name}>Hey, Lucien !</Text>
                <Image
                    source={require('../assets/home/mousse.png')}
                    style={styles.imageVector}
                />
            </View>
        </View>
    </View>

    )
}

const styles = StyleSheet.create({
    profil: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: "row",

    },
    circleProfil: {
        borderRadius: 50,
        backgroundColor: '#4B87FF',
        width: 48,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageProfil: {
        width: 42,
        height: 42,
        borderRadius: 50,
    },
    text: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 5,
    },
    new: {
      textDecorationColor: '#7B8395',
        color: '#7B8395',
    },
    line: {
        display: "flex",
        flexDirection: 'row'
    },
    name: {

        paddingLeft: 10,
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
    },
    imageVector: {
      marginTop: 3,
        marginLeft: 3,
        width: 8,
        height: 12,
        color: '#7B8395',
    },


});
