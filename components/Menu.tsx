import { StyleSheet, View, Image } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.menu}>
            <View style={styles.circleVector}>
                <Image
                    source={require('../assets/home/flower.png')}
                    style={styles.imageVector}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
        marginTop: 20,
    },
    circleVector: {
      color: '#393F4B',
      width: 32,
      height: 32,
      borderRadius: 50,
    },
    imageVector: {
        width: 16,
        height: 16,
        color: '#fff',
    }
})