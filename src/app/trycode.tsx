import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const TryCodeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.secondContainer}>
        <View style={styles.blueBox} />
        <View style={styles.redBox} />
        <View style={styles.blueBox} />
        <View style={styles.blueBox} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  secondContainer: {
    padding: 16,
    margin: 16,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "mistyrose",
  },
  blueBox: {
    backgroundColor: "blue",
    width: "25%",
    height: "25%",
    borderWidth: 1,
    zIndex: 1,
  },
  redBox: {
    backgroundColor: "red",
    width: "25%",
    height: "25%",
    borderWidth: 1,
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 0,
  },
});

export default TryCodeScreen;
