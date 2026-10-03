import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack initialRouteName="trycode">
      <Stack.Screen name="trycode" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="addnote" options={{ title: "Add Note" }} />
    </Stack>
  );
}
