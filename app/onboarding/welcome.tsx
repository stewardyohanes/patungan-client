import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity,
  StatusBar,
  Alert 
} from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const handleSignUp = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      Alert.alert('Sign Up', 'Fitur sign up akan segera hadir!');
      router.replace('/');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  const handleLogin = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      Alert.alert('Log In', 'Fitur login akan segera hadir!');
      router.replace('/');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  const handleGoogleContinue = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      Alert.alert('Google Sign In', 'Fitur Google Sign In akan segera hadir!');
      router.replace('/');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  const handleAppleContinue = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      Alert.alert('Apple Sign In', 'Fitur Apple Sign In akan segera hadir!');
      router.replace('/');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  const handleFacebookContinue = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      Alert.alert('Facebook Sign In', 'Fitur Facebook Sign In akan segera hadir!');
      router.replace('/');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  const handleTwitterContinue = async () => {
    try {
      await AsyncStorage.setItem('hasCompletedOnboarding', 'true');
      Alert.alert('Twitter Sign In', 'Fitur Twitter Sign In akan segera hadir!');
      router.replace('/');
    } catch (error) {
      console.error('Error saving onboarding status:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Logo Section */}
      <View style={styles.logoSection}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <View style={styles.logoSegment1} />
            <View style={styles.logoSegment2} />
          </View>
        </View>
      </View>
      
      {/* Content Section */}
      <View style={styles.contentSection}>
        <Text style={styles.title}>Let's Get Started!</Text>
        <Text style={styles.subtitle}>
          Dengan Patungan, bagi pengeluaran jadi lebih{'\n'}
          mudah dari sebelumnya
        </Text>
        
        {/* Social Login Buttons */}
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={handleGoogleContinue}>
            <View style={styles.socialIcon}>
              <Text style={styles.socialIconText}>G</Text>
            </View>
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton} onPress={handleAppleContinue}>
            <View style={styles.socialIcon}>
              <Text style={styles.socialIconText}>🍎</Text>
            </View>
            <Text style={styles.socialButtonText}>Continue with Apple</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton} onPress={handleFacebookContinue}>
            <View style={styles.socialIcon}>
              <Text style={styles.socialIconText}>f</Text>
            </View>
            <Text style={styles.socialButtonText}>Continue with Facebook</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.socialButton} onPress={handleTwitterContinue}>
            <View style={styles.socialIcon}>
              <Text style={styles.socialIconText}>🐦</Text>
            </View>
            <Text style={styles.socialButtonText}>Continue with Twitter</Text>
          </TouchableOpacity>
        </View>
        
        {/* Primary Action Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
        
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        
        {/* Terms */}
        <View style={styles.termsContainer}>
          <Text style={styles.termsText}>Privacy Policy    Terms of Service</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'relative',
  },
  logoSegment1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFB800',
  },
  logoSegment2: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    top: 25,
    left: 25,
  },
  contentSection: {
    flex: 0.6,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  socialButtonsContainer: {
    marginBottom: 24,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  socialIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  socialIconText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialButtonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: '#FFB800',
    paddingVertical: 16,
    borderRadius: 25,
    marginBottom: 12,
  },
  signUpButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  loginButton: {
    paddingVertical: 16,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 24,
  },
  loginButtonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
  termsContainer: {
    alignItems: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#999',
  },
});