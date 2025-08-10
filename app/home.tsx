import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Home() {
  const handleBackToOnboarding = () => {
    router.replace('/onboarding');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <View style={styles.logoSegment1} />
            <View style={styles.logoSegment2} />
          </View>
          <Text style={styles.logoText}>Splitify</Text>
        </View>
        
        <Text style={styles.welcomeText}>Welcome to Splitify!</Text>
        <Text style={styles.subText}>You've successfully completed the onboarding.</Text>
        
        <TouchableOpacity style={styles.button} onPress={handleBackToOnboarding}>
          <Text style={styles.buttonText}>View Onboarding Again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB800',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  logoSegment1: {
    position: 'absolute',
    width: 50,
    height: 50,
    backgroundColor: '#FFB800',
    borderRadius: 25,
    top: 12,
    left: 12,
  },
  logoSegment2: {
    position: 'absolute',
    width: 25,
    height: 25,
    backgroundColor: '#FFD54F',
    borderRadius: 12.5,
    bottom: 17,
    right: 17,
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    backgroundColor: '#FFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFB800',
    textAlign: 'center',
  },
});