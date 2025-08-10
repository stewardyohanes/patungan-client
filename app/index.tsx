import { StyleSheet, Text, View } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Index() {
  useEffect(() => {
    // Navigate to onboarding on app start
    router.replace('/onboarding');
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFB800',
  },
});
