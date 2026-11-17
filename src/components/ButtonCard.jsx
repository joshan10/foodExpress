
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function ButtonCard({ title, href, icon }) {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.card}>
        <Text style={styles.text}>{title}</Text>

        <View style={styles.icon}>
          {icon}
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#289b16',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.25,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    top:10
  }
});
