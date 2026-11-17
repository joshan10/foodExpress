import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import { CloseIcons } from "./ui/Icons";

export default function ModalForm({
    visible,
    onClose,
    title,
    children
}){
    return(
        <Modal visible={visible}  animationType="slide" >
            <View style={styles.container}>
                <Text>{title}</Text>
                {children}

                <Pressable style={styles.closeButton} onPress={onClose}>
                    <Text>{<CloseIcons/>}</Text>
                </Pressable>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:20,
        borderRadius:10,
        margin:10
    },
    closeButton:{
        position:'absolute',
        top:10,
        right:10,
    }
})