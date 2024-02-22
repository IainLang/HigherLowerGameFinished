import Title from "../Components/UserInterfaceFolder/Title";
import { Text, View, StyleSheet, Image } from "react-native";
import InstructionText from "../Components/UserInterfaceFolder/InstructionText";
import colors from "../Constants/Colors";
import PrimaryButton from "../Components/UserInterfaceFolder/PrimaryButton";
function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return(     
        <View style={styles.screen}>
            <Title>Game Over!!</Title>
                <View style={styles.imageContainer}>
                  <Image style={styles.imageStyle} source={require('../assets/Images/background.png')}/>
                </View>
            <InstructionText>Your number was found </InstructionText>
            <Text style={styles.summaryText}>Your phone needed 
            <Text style={styles.summaryTextHighlight}> {roundsNumber}</Text> rounds to guess
            <Text style={styles.summaryTextHighlight}> {userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
)};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen:{
     flex:1,
     padding:20,
     justifyContent:'center',
     alignItems:'center'
    },
    imageContainer:{
        borderRadius:150,
        height:300,
        width:300,
        borderWidth:3,
        margin:40,
        borderColor:colors.primary1,
        overflow:'hidden'
    },
    imageStyle:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:16,
        textAlign:'center',
        marginBottom:10

    },
    summaryTextHighlight:{
        fontFamily:'open-sans-bold',
        color:colors.primary1,
    }

  }); 