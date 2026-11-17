import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header({path}) {
  return (
    <View style={styles.header}>
        <Image source={require('../../assets/logos/monsterIcons.jpeg')} style={styles.logo} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Food Express</Text>
          <Text style={styles.ruta}>{path}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#30ba26',
        paddingTop: 50,
    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    ruta: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 10,
        marginRight: 10,
    },
    logo: {
        width: 60,
        height: 60,
        marginRight: 10,
        borderRadius: 50
    },
})