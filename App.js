import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundNum, setRoundNum] = useState(0);

  function selectedNumberHandler(selectedNumber) {
    setUserNumber(selectedNumber);
    setGameOver(false);
  }
  function gameOverHandler() {
    setGameOver(true);
  };
  function startNewGameHandler() {
    setUserNumber(null);
    setGameOver(false);
    setRoundNum(0);
  }
  function roundHandler(round) {
    setRoundNum(round);
  }

  let screen = <StartGameScreen onSelected={selectedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} onRound={roundHandler}/>;
  }
  if (gameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundNum={roundNum} onNewGame={startNewGameHandler}/>;
  }
    
  return (
    <LinearGradient colors={["#ccc", "#eee", "#fff"]} style={styles.container}>
      <SafeAreaView>
        {screen}
      </SafeAreaView>
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
