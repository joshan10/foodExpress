import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { DeleteIcon, EditIcon } from "./ui/Icons";

export default function CardList({ nombre, documento, children, item, onEdit, onDelete }) {
  const imageUserDefault =
    "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg";
  return (
    <View style={[styles.container, item.activo === "true" || item.activo === true ? styles.userActive : styles.userInactive]}>
      <View style={styles.imageContainer} >
        <Image source={{ uri: imageUserDefault }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Nombre: {nombre}</Text>
        <Text style={styles.text}>Documento: {documento}</Text>
        {children}
      </View>
      <View style={styles.actions}>
        <Pressable style={styles.actionButton} onPress={onEdit}>
          <EditIcon />
        </Pressable>
        <Pressable style={styles.actionButton} onPress={onDelete}>
          <DeleteIcon />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 20,
    height: 170,
    borderLeftWidth: 5,
    borderColor: "#ccc",
  },

    userActive: {
      borderColor: "#00ff00",
    },

  userInactive: {
    borderColor: "#ff0000",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 30,
    padding: 5,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  textContainer: {
    flex: 1,
  },
  actions: {
    gap: 8,
    marginLeft: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
  },
});
