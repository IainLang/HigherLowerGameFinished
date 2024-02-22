import { useEffect, useState } from "react";
import {View, StyleSheet, Alert, Text, FlatList} from "react-native";
import Title from "../Components/UserInterfaceFolder/Title";
import NumberContainer from "../Components/GameFolder/NumberContainer";
import PrimaryButton from "../Components/UserInterfaceFolder/PrimaryButton";
import Card1 from "../Components/UserInterfaceFolder/Card1";
import InstructionText from "../Components/UserInterfaceFolder/InstructionText";
import {Ionicons  } from '@expo/vector-icons';
import GuessLogItem from "../Components/GameFolder/GuessLogItem";
/*Generating random number */

function generateRandomBetween(min, max, exclude){
   const rndNum = Math.floor(Math.random() * (max - min)) + min;

   if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
   } else {
    return rndNum;
   }
}

/**/

let minBoundary = 1;
let maxBoundary = 100;


function GameScreen({userNumber, onGameOver}){
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);



  useEffect(() => {
    if (currentGuess === userNumber){
        onGameOver(guessRounds.length);
    }
  },[currentGuess, userNumber, onGameOver]);

  useEffect(()=> {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  function nextGuessHandler(direction){
    if (
      (direction === "Lower" && currentGuess < userNumber) ||
      (direction === "Greater" && currentGuess > userNumber)
    ){
      Alert.alert('Dont Lie!!','User Choice was incorrect',[{text:'Sorry', style:'destructive'}] )
      return;
    }
      if (direction === "Lower") {
        maxBoundary = currentGuess;
      } else {
        minBoundary = currentGuess + 1;
      }
    console.log(minBoundary, maxBoundary);
    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNum);
    setGuessRounds(prevGuessRounds =>[newRndNum,...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

   return (
     <View style={styles.screen}>
       <Title>Opponents Guess</Title>
       <NumberContainer>{currentGuess}</NumberContainer>
       <Card1>
         <InstructionText style={styles.InstructionText}>
           Higher Or Lower?
         </InstructionText>
         <View style={styles.buttonsContainer}>
           <View style={styles.buttonContainer}>
             <PrimaryButton onPress={nextGuessHandler.bind(this, "Lower")}>
               <Ionicons name="remove" size={26} color="white" />
             </PrimaryButton>
           </View>
           <View style={styles.buttonContainer}>
             <PrimaryButton onPress={nextGuessHandler.bind(this, "Greater")}>
               <Ionicons name="add" size={26} color="white" />
             </PrimaryButton>
           </View>
         </View>
       </Card1>
       <View style={styles.listContainer}>
         {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
         <FlatList
           data={guessRounds}
           renderItem={(itemData) => (
             <GuessLogItem
               roundNumber={guessRoundsListLength - itemData.index}
               guess={itemData.item}
             />
           )}
           keyExtractor={(item) => item}
         />
       </View>
     </View>
   );
   
};

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
     flex:1,
     padding:24,
     alignItems:'center'
    },
    InstructionText:{
      fontSize:24,
      marginBottom:12
    },

    buttonsContainer:{
      flexDirection:'row'
  },
  buttonContainer:{
      flex:1,
  },
  listContainer:{
    flex:1,
    padding:16,
  },


  }); 