import AddFloatingButton from "@/components/AddFloatingButton";
import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.containerHeader}>
        <Text style={styles.title}>Home</Text>
      </View>
      <AddFloatingButton onPress={() => router.push("/addnote")} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  containerHeader: {
    flex: 0.1,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  floatingButton: {
    flex: 1,
    backgroundColor: "green",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});

export default index;
