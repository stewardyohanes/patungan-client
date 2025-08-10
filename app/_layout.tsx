import React, { useEffect, useState } from 'react';
import { Stack } from "expo-router";
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding before asset loading is complete
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean | null>(null);

  useEffect(() => {
    const checkOnboardingStatus = async () => {
      try {
        const hasCompletedOnboarding = await AsyncStorage.getItem('hasCompletedOnboarding');
        setIsOnboardingComplete(hasCompletedOnboarding === 'true');
        
        // Hide splash screen after we've determined the route
        setTimeout(() => {
          SplashScreen.hideAsync();
        }, 100);
        
        // Navigate based on onboarding status
        if (hasCompletedOnboarding !== 'true') {
          router.replace('/onboarding/splash');
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
        setIsOnboardingComplete(false);
        SplashScreen.hideAsync();
        router.replace('/onboarding/splash');
      }
    };

    checkOnboardingStatus();
  }, []);

  // Don't render anything until we've determined the onboarding status
  if (isOnboardingComplete === null) {
    return null;
  }

  return (
    <Stack 
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="onboarding/splash" />
      <Stack.Screen name="onboarding/walkthrough1" />
      <Stack.Screen name="onboarding/walkthrough2" />
      <Stack.Screen name="onboarding/walkthrough3" />
      <Stack.Screen name="onboarding/welcome" />
    </Stack>
  );
}
