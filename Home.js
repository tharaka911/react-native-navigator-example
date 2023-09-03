import { StatusBar } from "expo-status-bar";
import { Alert, Button, SafeAreaView, StyleSheet, Text, View } from "react-native";



export  function HomeUi({navigation}) {
  const ui = (
   
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />

      <Text style={styles.text1}>
        Home
      </Text>
      <Button title="Go to Profile" onPress={goToProfile} />

    </SafeAreaView>

  );

  return ui;

function goToProfile() {
    //Alert.alert("Go to Profile","nawwa");

    const obj = {name:"nawwa",age:26};
    navigation.navigate("Profile",obj);
}

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "red",
    fontSize: 24,
    fontWeight: "bold",
  },
});
