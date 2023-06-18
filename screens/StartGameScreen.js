import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
function StartGameScreen({ onpickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function resetInputHandler() {
    setEnteredNumber("");
  }

  const { width, height } = useWindowDimensions();

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Number",
        "Number as to be a number between 1 and 99",
        [{ text: "oke", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    onpickNumber(chosenNumber);
  }

  const marginTopDistance = height < 400 ? 50 : 100;
  return (
    <ScrollView style={styles.button}>
      <KeyboardAvoidingView style={styles.rootContainer} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <Text style={styles.instrctionText}>
              Enter a number form 0 to 99
            </Text>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.button}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

// const deviceHight = Demensions.get("window").height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceHight < 400 ? 30 : 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  instrctionText: {
    color: "#ddb52f",
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
