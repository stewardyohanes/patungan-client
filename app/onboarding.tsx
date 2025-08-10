import { StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const { width, height } = Dimensions.get('window');

const OnboardingData = [
  {
    id: 1,
    type: 'splash',
    title: 'Splitify',
    subtitle: '',
    description: '',
  },
  {
    id: 2,
    type: 'walkthrough',
    title: 'Seamless Payments, Effortless Splits',
    subtitle: '',
    description: 'With Splitify, managing your expenses is as easy as a tap. Your wallet is your gateway to hassle-free payments and smooth bill splits.',
  },
  {
    id: 3,
    type: 'walkthrough',
    title: 'Share Bills, Share Moments',
    subtitle: '',
    description: 'Create a bill-sharing group with your friends, and Splitify will handle the rest. Stay organized and enjoy every moment together!',
  },
  {
    id: 4,
    type: 'walkthrough',
    title: 'Stay Connected, Split Confidently',
    subtitle: '',
    description: 'Easily manage your Splitify friends. Add, remove, and stay in the loop with who you\'re splitting with.',
  },
  {
    id: 5,
    type: 'welcome',
    title: 'Let\'s Get Started!',
    subtitle: 'With Splitify, expenses split bills is easier than ever before.',
    description: '',
  }
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentScreen = OnboardingData[currentIndex];

  const nextScreen = () => {
    if (currentIndex < OnboardingData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const skipToEnd = () => {
    setCurrentIndex(OnboardingData.length - 1);
  };

  const handleGetStarted = () => {
    router.replace('/home');
  };

  const renderSplashScreen = () => (
    <View style={styles.splashContainer}>
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <View style={styles.logoSegment1} />
          <View style={styles.logoSegment2} />
        </View>
        <Text style={styles.logoText}>Splitify</Text>
      </View>
      <View style={styles.loadingContainer}>
        <View style={styles.loadingDots}>
          <View style={[styles.loadingDot, { backgroundColor: '#FFB800' }]} />
          <View style={[styles.loadingDot, { backgroundColor: '#FFD54F' }]} />
          <View style={[styles.loadingDot, { backgroundColor: '#FFF3C4' }]} />
        </View>
      </View>
    </View>
  );

  const renderWalkthroughScreen = () => (
    <View style={styles.walkthroughContainer}>
      <View style={styles.mockupContainer}>
        <View style={styles.phoneFrame}>
          <View style={styles.phoneScreen}>
            {currentIndex === 1 && (
              <View style={styles.paymentMockup}>
                <Text style={styles.mockupTitle}>Splitify</Text>
                <Text style={styles.balanceText}>9,567.50°</Text>
                <Text style={styles.balanceSubtext}>Available Balance</Text>
                <View style={styles.actionButtons}>
                  {['send', 'request', 'split', 'pay', 'more'].map((action, idx) => (
                    <View key={idx} style={styles.actionButton}>
                      <View style={styles.actionIcon} />
                    </View>
                  ))}
                </View>
                <View style={styles.activitySection}>
                  <Text style={styles.sectionTitle}>Activity</Text>
                  <View style={styles.activityItem}>
                    <Text style={styles.activityText}>Andrew Ainsley (You)</Text>
                    <Text style={styles.activityAmount}>+$250.50</Text>
                  </View>
                  <View style={styles.activityItem}>
                    <Text style={styles.activityText}>Alfredo Schaefer</Text>
                    <Text style={styles.activityAmount}>-$44.50</Text>
                  </View>
                </View>
              </View>
            )}
            {currentIndex === 2 && (
              <View style={styles.groupsMockup}>
                <Text style={styles.mockupTitle}>Groups</Text>
                {['Trip to Japan', 'Dinner Delights', 'Expense Explorers', 'Road Trip Racketeers', 'Gadget Gurus', 'Family Vacation'].map((group, idx) => (
                  <View key={idx} style={styles.groupItem}>
                    <View style={styles.groupAvatar} />
                    <View style={styles.groupInfo}>
                      <Text style={styles.groupName}>{group}</Text>
                      <Text style={styles.groupMembers}>👥👥👥</Text>
                    </View>
                  </View>
                ))}
              </View>
            )}
            {currentIndex === 3 && (
              <View style={styles.splitMockup}>
                <Text style={styles.mockupTitle}>Split by</Text>
                <View style={styles.splitOptions}>
                  <TouchableOpacity style={[styles.splitOption, styles.splitOptionActive]}>
                    <Text style={styles.splitOptionText}>Equally</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.splitOption}>
                    <Text style={styles.splitOptionText}>By Percentage</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.friendsList}>
                  {[
                    'Andrew Ainsley (You)',
                    'Charlotte Hanlin',
                    'Daren Rutikowski',
                    'Kristin Watson',
                    'Joseph Thomas',
                    'Maryland Winkles'
                  ].map((friend, idx) => (
                    <View key={idx} style={styles.friendItem}>
                      <View style={styles.friendAvatar} />
                      <Text style={styles.friendName}>{friend}</Text>
                      <View style={styles.friendCheck} />
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{currentScreen.title}</Text>
        <Text style={styles.description}>{currentScreen.description}</Text>
      </View>

      <View style={styles.indicatorContainer}>
        {OnboardingData.filter(item => item.type === 'walkthrough').map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === currentIndex - 1 ? styles.activeIndicator : styles.inactiveIndicator
            ]}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={skipToEnd}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.continueButton} onPress={nextScreen}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderWelcomeScreen = () => (
    <View style={styles.welcomeContainer}>
      <View style={styles.welcomeContent}>
        <Text style={styles.welcomeTitle}>{currentScreen.title}</Text>
        <Text style={styles.welcomeSubtitle}>{currentScreen.subtitle}</Text>
      </View>

      <View style={styles.socialLoginContainer}>
        <TouchableOpacity style={styles.googleButton}>
          <Text style={styles.googleButtonText}>🌐 Continue with Google</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.appleButton}>
          <Text style={styles.appleButtonText}>🍎 Continue with Apple</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.facebookButton}>
          <Text style={styles.facebookButtonText}>📘 Continue with Facebook</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.twitterButton}>
          <Text style={styles.twitterButtonText}>🐦 Continue with Twitter</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton} onPress={handleGetStarted}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logInButton} onPress={handleGetStarted}>
          <Text style={styles.logInButtonText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>Privacy Policy • Terms of Service</Text>
    </View>
  );

  const renderCurrentScreen = () => {
    if (currentScreen.type === 'splash') {
      return renderSplashScreen();
    } else if (currentScreen.type === 'walkthrough') {
      return renderWalkthroughScreen();
    } else {
      return renderWelcomeScreen();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.screenTouchable} 
        onPress={currentScreen.type === 'splash' ? nextScreen : undefined}
        activeOpacity={currentScreen.type === 'splash' ? 0.8 : 1}
      >
        {renderCurrentScreen()}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB800',
  },
  screenTouchable: {
    flex: 1,
  },
  // Splash Screen Styles
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFB800',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 100,
  },
  logoCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FFF',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  logoSegment1: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#FFB800',
    borderRadius: 30,
    top: 15,
    left: 15,
  },
  logoSegment2: {
    position: 'absolute',
    width: 30,
    height: 30,
    backgroundColor: '#FFD54F',
    borderRadius: 15,
    bottom: 20,
    right: 20,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  loadingContainer: {
    position: 'absolute',
    bottom: 100,
  },
  loadingDots: {
    flexDirection: 'row',
    gap: 8,
  },
  loadingDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  // Walkthrough Screen Styles
  walkthroughContainer: {
    flex: 1,
    backgroundColor: '#FFB800',
    paddingHorizontal: 20,
  },
  mockupContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  phoneFrame: {
    width: width * 0.7,
    height: height * 0.5,
    backgroundColor: '#000',
    borderRadius: 25,
    padding: 4,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 21,
    padding: 20,
  },
  // Payment Mockup
  paymentMockup: {
    flex: 1,
  },
  mockupTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  balanceText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFB800',
  },
  balanceSubtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  actionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#FFB800',
    borderRadius: 12,
  },
  activitySection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  activityText: {
    fontSize: 16,
  },
  activityAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  // Groups Mockup
  groupsMockup: {
    flex: 1,
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  groupAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFB800',
    marginRight: 15,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  groupMembers: {
    fontSize: 14,
    color: '#666',
  },
  // Split Mockup
  splitMockup: {
    flex: 1,
  },
  splitOptions: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 10,
  },
  splitOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  splitOptionActive: {
    backgroundColor: '#FFB800',
    borderColor: '#FFB800',
  },
  splitOptionText: {
    fontSize: 14,
    fontWeight: '500',
  },
  friendsList: {
    flex: 1,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  friendAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFB800',
    marginRight: 12,
  },
  friendName: {
    flex: 1,
    fontSize: 16,
  },
  friendCheck: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFB800',
  },
  // Content and Navigation
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFF',
    lineHeight: 24,
    opacity: 0.9,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeIndicator: {
    backgroundColor: '#FFF',
  },
  inactiveIndicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 15,
  },
  skipButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#FFF',
    backgroundColor: 'transparent',
  },
  skipButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  continueButton: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#FFF',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFB800',
    textAlign: 'center',
  },
  // Welcome Screen Styles
  welcomeContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  welcomeContent: {
    alignItems: 'center',
    marginBottom: 50,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  socialLoginContainer: {
    gap: 15,
    marginBottom: 30,
  },
  googleButton: {
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  appleButton: {
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#000',
  },
  appleButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  facebookButton: {
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#1877F2',
  },
  facebookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  twitterButton: {
    paddingVertical: 15,
    borderRadius: 12,
    backgroundColor: '#1DA1F2',
  },
  twitterButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  signUpButton: {
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: '#FFB800',
    marginTop: 20,
  },
  signUpButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
  logInButton: {
    paddingVertical: 15,
    borderRadius: 25,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFB800',
  },
  logInButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFB800',
    textAlign: 'center',
  },
  termsText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
});