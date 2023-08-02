import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <Text style={styles.textStyle}>Rendezvous</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder="Email"
        keyboardType="email-address"
      ></TextInput>
      <TextInput
        style={styles.inputStyle}
        placeholder="Password"
        secureTextEntry={true}
      ></TextInput>
      <Button color={"#6B2D5C"} title={"Login"} />
      <NavPanel />
      <StatusBar style="auto" />
    </View>
  );
}

const NavPanel = () => {
  return (
    <View style={styles.navPanel}>
      <TouchableOpacity style={styles.navButton}>
        <Text style={styles.navItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Add Date</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Bookmarks</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.navItem}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#ffafcc",
    backgroundColor: "#FF335C",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 50,
    // color: "#fff",
    color: "black",
    fontFamily: "sans-serif-thin",
  },
  inputStyle: {
    margin: 20,
    padding: 10,
    width: "80%",
    backgroundColor: "#fff",
    borderColor: "black",
    borderWidth: 1,
  },
  navPanel: {
    marginTop: 50,
    flexDirection: "row",
  },
  navButton: {},
  navItem: {
    fontFamily: "sans-serif-thin",
    padding: 10,
    // color: "#fff",
    color: "black",
    fontWeight: "bold",
  },
});
