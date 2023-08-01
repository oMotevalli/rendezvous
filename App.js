import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Text style={styles.textStyle}>Rendezvous</Text>
      <TextInput style={styles.inputStyle} placeholder="Username"></TextInput>
      <TextInput style={styles.inputStyle} placeholder="Password"></TextInput>
      <Button color={"#573295"} title={"Login"} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffafcc",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 50,
    color: "#fff",
    fontFamily: "monospace",
  },
  inputStyle: {
    margin: 20,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
  },
});
