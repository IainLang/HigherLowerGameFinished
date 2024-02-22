import { Text, StyleSheet } from "react-native"
import colors from "../../Constants/Colors"

function InstructionText({children, style}){
    return <Text style={[styles.instructionTextStyle, style]}>{children}</Text>


}

export default InstructionText

const styles = StyleSheet.create({
    instructionTextStyle:{
        fontFamily:'open-sans',
        color:colors.primary1,
        fontSize:16
    },
})