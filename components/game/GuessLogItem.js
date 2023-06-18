import { View, Text, StyleSheet } from "react-native";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Oppent's Guess: {guess}</Text>
    </View>
  );
}
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "#ddb52f",
    borderRadius: 40,
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
