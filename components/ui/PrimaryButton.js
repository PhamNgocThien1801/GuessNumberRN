import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOutnnerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutnnerContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
