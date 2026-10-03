import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, TouchableOpacity } from "react-native";

type Props = {
  onPress: () => void;
};

const AddFloatingButton = ({ onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
      <AntDesign name="plus" size={24} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default AddFloatingButton;
