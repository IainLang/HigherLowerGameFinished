import { View, Text, StyleSheet } from "react-native";
import colors from "../../Constants/Colors";

function GuessLogItem({roundNumber, guess}) {
    return( 
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponents guess - {guess}</Text>
           </View>
);
}
export default GuessLogItem;

const styles = StyleSheet.create({
    listItem:{
        borderColor:colors.primary1,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:6,
        backgroundColor:colors.grey,
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width: 0, height: 1},
        shadowRadius: 3,
        shadowOpacity: 0.25,
    },
    itemText:{
        fontFamily:'open-sans'
    }
});