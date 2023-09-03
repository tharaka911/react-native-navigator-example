import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export function ProfileUi({navigation,route}) {
  const ui = (
  
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text1}>Profile</Text>
      <Text style={styles.text1}>{route.params.name}</Text>
      

    </SafeAreaView>
  );

  return ui;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "Blue",
    fontSize: 24,
    fontWeight: "bold",
  },
});
