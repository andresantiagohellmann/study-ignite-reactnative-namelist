import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    color: "#fdfcfe",
    fontSize: 16,
    padding: 12,
    marginTop: 24,
    marginRight: 8,
    borderRadius: 8,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  buttonText: {
    flex: 1,
    color: "#fdfcfe",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  emptyList: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
