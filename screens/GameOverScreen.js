import {
  Text,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
function GameOverScreen({ userNumber, guessNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed{" "}
            <Text style={styles.hightlight}>{guessNumber} </Text>
            rounds to guess the number
            <Text style={styles.hightlight}> {userNumber}</Text>.
          </Text>
        </View>
        <PrimaryButton onPress={onStartNewGame}>Start New Game </PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;
// const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 300,
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 36,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  hightlight: {
    fontFamily: "open-sans-bold",
    color: "white",
  },
  screen: {
    flex: 1,
  },
});
