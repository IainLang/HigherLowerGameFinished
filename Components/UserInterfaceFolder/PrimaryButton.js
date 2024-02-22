import {Text, View, Pressable, StyleSheet } from 'react-native';
import colors from '../../Constants/Colors';
function PrimaryButton({children, onPress}) {
  
    return (
      <View style={styles.buttonOuterContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.buttonInnerContainer, styles.pressed]
              : styles.buttonInnerContainer
          }
          onPress={onPress}
          android_ripple={{ color: colors.white }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>
    );
    }
export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:2,
        overflow:'hidden'
    },
    buttonInnerContainer: { 
        backgroundColor:colors.primary1,
        paddingVertical: 8,
        paddingHorizontal:8,
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    buttonText:{
        color:'white',
        textAlign:'center',
    },
    pressed:{
        opacity:0.75,
    },
    
})