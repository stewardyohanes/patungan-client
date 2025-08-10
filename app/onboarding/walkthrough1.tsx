import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions, 
  TouchableOpacity,
  StatusBar,
  Image 
} from 'react-native';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function Walkthrough1() {
  const handleSkip = () => {
    router.replace('/onboarding/welcome');
  };

  const handleContinue = () => {
    router.push('/onboarding/walkthrough2');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFB800" />
      
      {/* Phone mockup area */}
      <View style={styles.phoneContainer}>
        <View style={styles.phoneMockup}>
          <View style={styles.phoneHeader}>
            <Text style={styles.headerText}>Patungan</Text>
          </View>
          
          <View style={styles.balanceSection}>
            <Text style={styles.balanceLabel}>Saldo Tersedia</Text>
            <Text style={styles.balanceAmount}>Rp 2.567.500</Text>
          </View>
          
          <View style={styles.actionsContainer}>
            <View style={styles.actionButton}>
              <Text style={styles.actionText}>Kirim</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionText}>Minta</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionText}>Split</Text>
            </View>
          </View>
          
          <View style={styles.activitySection}>
            <Text style={styles.sectionTitle}>Aktivitas</Text>
            <View style={styles.activityItem}>
              <Text style={styles.activityName}>Makan Bersama</Text>
              <Text style={styles.activityAmount}>-Rp 45.000</Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Pembayaran Mudah,{'\n'}Patungan Praktis</Text>
        <Text style={styles.description}>
          Dengan Patungan, kelola pengeluaran bersama{'\n'}
          jadi mudah. Dompet digital kamu adalah{'\n'}
          gerbang ke pembayaran bebas ribet dan{'\n'}
          split bill yang lancar.
        </Text>
        
        {/* Pagination dots */}
        <View style={styles.pagination}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
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
  balanceSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: '#FFB800',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  actionText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 12,
  },
  activitySection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  activityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    padding: 12,
    borderRadius: 8,
  },
  activityName: {
    fontSize: 14,
    color: '#333',
  },
  activityAmount: {
    fontSize: 14,
    color: '#E74C3C',
    fontWeight: '600',
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