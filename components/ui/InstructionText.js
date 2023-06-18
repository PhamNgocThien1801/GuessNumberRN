import { Text, StyleSheet } from "react-native";
function InstructionText({ children }) {
  return <Text style={styles.instrctionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instrctionText: {
    color: "#ddb52f",
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
