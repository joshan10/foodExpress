import { Pressable, StyleSheet } from "react-native";

export default function ButtonFlotante({onPress, position, icon, stylesProps
}) {
    
    return(
        <Pressable 
        onPress={onPress} 
        style={[stylesProps ? stylesProps : styles.default]} >
            {icon}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    default:{
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#297fee',
        borderRadius:50,
        position:'absolute',
        bottom:30,
        right:30
        
    }
})