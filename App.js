
import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';

import StartGameScreen from './Screens/StartGameScreen';
import GameScreen from './Screens/GameScreen';
import GameOverScreen from './Screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded){
    return <AppLoading />;
  }


  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);  
    console.log('New Game Started')
  
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if (gameIsOver && userNumber){
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

 

  return (
    <LinearGradient  colors={['#003663','#dddddd']} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/Images/CliffBackground.jpg')} 
        resizeMode='cover'
        style={styles.rootScreen}        
        imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
 rootScreen:{
  flex:1,
 },

 backgroundImage:{
  opacity:0.25,
 }
  },
); 
