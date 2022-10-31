import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1f1e25",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
    borderRadius: 8,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    marginLeft: 16,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#e83f5b",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonText: {
    flex: 1,
    color: "#fdfcfe",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
