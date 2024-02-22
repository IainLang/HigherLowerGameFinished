import { View, StyleSheet } from "react-native";

function Card1({children}){
    return <View style={styles.card}>{children}</View> 

}

export default Card1;

const styles = StyleSheet.create({
    card: {
        justifyContent:'center',
        alignItems:'center',
        padding: 16,
        marginTop:36,
        marginHorizontal: 20,
        backgroundColor: '#dddddd',
        borderRadius:8,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },

});