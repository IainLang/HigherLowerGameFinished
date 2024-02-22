import { View, Text, StyleSheet } from "react-native";
import colors from "../../Constants/Colors";

function NumberContainer({children}){
return <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
       </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:colors.primary1,
        padding:24,
        margin:25,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center'
    },
    numberText:{
        color:colors.grey,
        fontSize:36,
        fontWeight:'bold',
        fontFamily:'open-sans-bold'
    },
});