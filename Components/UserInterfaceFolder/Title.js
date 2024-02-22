import { Text, StyleSheet } from "react-native";
import colors from "../../Constants/Colors";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;

} 

export default Title;

const styles = StyleSheet.create({
    title:{
      fontFamily:'open-sans-bold',
      fontSize:24,
      fontWeight:'bold',
      color:'#dddddd',
      textAlign:'center',
      borderWidth:4,
      borderColor:colors.primary1,
      padding:6,
      borderRadius:8,
      maxWidth:'80%',
      width:300,

    }
  }); 