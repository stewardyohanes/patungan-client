import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity,
  StatusBar,
  ScrollView 
} from 'react-native';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Walkthrough2() {
  const handleSkip = () => {
    router.replace('/onboarding/welcome');
  };

  const handleContinue = () => {
    router.push('/onboarding/walkthrough3');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFB800" />
      
      {/* Phone mockup area */}
      <View style={styles.phoneContainer}>
        <View style={styles.phoneMockup}>
          <View style={styles.phoneHeader}>
            <Text style={styles.headerText}>Grup</Text>
          </View>
          
          <ScrollView style={styles.groupsList} showsVerticalScrollIndicator={false}>
            <View style={styles.groupItem}>
              <View style={styles.groupImage} />
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>Trip ke Bali</Text>
                <Text style={styles.groupMembers}>8 orang</Text>
              </View>
            </View>
            
            <View style={styles.groupItem}>
              <View style={styles.groupImage} />
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>Dinner Delights</Text>
                <Text style={styles.groupMembers}>4 orang</Text>
              </View>
            </View>
            
            <View style={styles.groupItem}>
              <View style={styles.groupImage} />
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>Expense Explorers</Text>
                <Text style={styles.groupMembers}>6 orang</Text>
              </View>
            </View>
            
            <View style={styles.groupItem}>
              <View style={styles.groupImage} />
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>Road Trip Backpiers</Text>
                <Text style={styles.groupMembers}>5 orang</Text>
              </View>
            </View>
            
            <View style={styles.groupItem}>
              <View style={styles.groupImage} />
              <View style={styles.groupInfo}>
                <Text style={styles.groupName}>Gadget Group</Text>
                <Text style={styles.groupMembers}>3 orang</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Bagi Tagihan,{'\n'}Bagi Momen</Text>
        <Text style={styles.description}>
          Buat grup sharing tagihan dengan teman-temanmu{'\n'}
          dan biarkan Patungan mengatur sisanya. Tetap{'\n'}
          terorganisir dan nikmati setiap momen bersama!
        </Text>
        
        {/* Pagination dots */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB800',
  },
  phoneContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  phoneMockup: {
    width: width * 0.7,
    height: height * 0.45,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 10,
  },
  phoneHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  groupsList: {
    flex: 1,
  },
  groupItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8E8E8',
    marginRight: 16,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  groupMembers: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 0.4,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 32,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDD',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skipButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  skipText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  continueButton: {
    backgroundColor: '#FFB800',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
  },
  continueText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});