import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOVever, setgameIsOver] = useState(true);
  const [guessNumber, setGuessNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setgameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setgameIsOver(true);
    setGuessNumber(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessNumber(0);
  }

  let screen = <StartGameScreen onpickNumber={pickNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOVever && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        guessNumber={guessNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScren}>
      <ImageBackground
        style={styles.rootScren}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScren}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScren: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
