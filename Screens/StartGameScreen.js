import { useState } from 'react';
import { TextInput, View, StyleSheet, Alert, Text} from 'react-native';
import PrimaryButton from '../Components/UserInterfaceFolder/PrimaryButton';
import colors from '../Constants/Colors';
import Title from '../Components/UserInterfaceFolder/Title';
import Card1 from '../Components/UserInterfaceFolder/Card1';
import InstructionText from '../Components/UserInterfaceFolder/InstructionText';

function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

function numberInputhandler(enteredText){
    setEnteredNumber(enteredText);
}
function resetInputHandler(){
    setEnteredNumber('');
}
function comfirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber)|| chosenNumber <=0|| chosenNumber >99) {
            Alert.alert('Invalid Entry!!','Enter value between 1 and 99!!',[{text: 'Close', style:'default', onPress: resetInputHandler }] )
        return;
    }
        //Valid Number
    onPickNumber(chosenNumber);
}

    return (
    <View style={styles.rootContainer}>
     <Title >Number Guesser</Title>
      <Card1>
       <InstructionText> Input a number between 1 - 100</InstructionText>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize='none'
          autoCorrect={false}
          onChangeText={numberInputhandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton onPress={comfirmInputHandler} >Confirm</PrimaryButton>
            </View>
        </View>
       </Card1>
      </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:60,
        alignItems:'center'
    },
    inputNumber:{
        height:50,
        width:50,
        fontSize: 32,
        borderBottomColor: colors.primary1,
        borderBottomWidth:2,
        color: colors.primary1,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center'

    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1,
    }


});