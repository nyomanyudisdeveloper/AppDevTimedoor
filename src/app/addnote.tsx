import AddFloatingButton from "@/components/AddFloatingButton";
import { addNote } from "@/db";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const addnote = () => {
  const [note, setNote] = useState("");

  const submit = async () => {
    try {
      if (note.length <= 0) {
        alert("Note must be filled");
      } else {
        const res = await addNote(note);
        if (res) {
          alert("Note has been successfully submitted");
          setNote("");
        } else {
          alert("Add Note was failed");
        }
      }
    } catch (err) {}
  };
  return (
    <View style={styles.mainContainer}>
      <View style={{ marginVertical: 5, marginHorizontal: 10 }}>
        <Text style={{ marginBottom: 5, fontWeight: "bold" }}>Input Notes</Text>
        <TextInput
          value={note}
          onChangeText={setNote}
          multiline={true}
          style={styles.input}
        ></TextInput>
      </View>
      <AddFloatingButton onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    height: 100,
  },
});

export default addnote;
