import { StyleSheet, Text, View, Image } from 'react-native';

export default function Profil() {
    return (
    <View style={styles.profil}>

        <Image
            source={require('../assets/home/imageProfil.png')}
            style={styles.imageProfil}
        />

        <View style={styles.text}>
            <Text style={styles.new}>Nouveau</Text>

            <View style={styles.line}>
                <Text style={styles.name}>Hey, Lucien !</Text>
                <Image
                    source={require('../assets/home/Vector.png')}
                    style={styles.imageVector}
                />
            </View>
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    profil: {

    },
    imageProfil: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    text: {
        backgroundColor: '#fff'
    },
    new: {
      textDecorationColor: '#7B8395',
        fontFamily: 'Open Sans',

    },
    line: {
        display: "flex",
        flexDirection: 'row'
    },
    name: {

        paddingLeft: 10,
        fontSize: 13
    },
    imageVector: {
      marginTop: 3,
        marginLeft: 3,
        width: 8,
        height: 12,
    },


});
