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

export default function Walkthrough3() {
  const handleSkip = () => {
    router.replace('/onboarding/welcome');
  };

  const handleGetStarted = () => {
    router.replace('/onboarding/welcome');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFB800" />
      
      {/* Phone mockup area */}
      <View style={styles.phoneContainer}>
        <View style={styles.phoneMockup}>
          <View style={styles.phoneHeader}>
            <Text style={styles.headerText}>Split by</Text>
          </View>
          
          <ScrollView style={styles.friendsList} showsVerticalScrollIndicator={false}>
            <View style={styles.friendItem}>
              <View style={styles.friendAvatar} />
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>Andrew Ashley (You)</Text>
                <Text style={styles.friendStatus}>Lunas</Text>
              </View>
              <View style={styles.statusIcon} />
            </View>
            
            <View style={styles.friendItem}>
              <View style={styles.friendAvatar} />
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>Charlotte Martin</Text>
                <Text style={styles.friendStatus}>Hutang</Text>
              </View>
              <View style={styles.statusIcon} />
            </View>
            
            <View style={styles.friendItem}>
              <View style={styles.friendAvatar} />
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>Daren Kudkowski</Text>
                <Text style={styles.friendStatus}>Lunas</Text>
              </View>
              <View style={styles.statusIcon} />
            </View>
            
            <View style={styles.friendItem}>
              <View style={styles.friendAvatar} />
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>Kristin Watson</Text>
                <Text style={styles.friendStatus}>Hutang</Text>
              </View>
              <View style={styles.statusIcon} />
            </View>
            
            <View style={styles.friendItem}>
              <View style={styles.friendAvatar} />
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>Joseph Thomas</Text>
                <Text style={styles.friendStatus}>Lunas</Text>
              </View>
              <View style={styles.statusIcon} />
            </View>
            
            <View style={styles.friendItem}>
              <View style={styles.friendAvatar} />
              <View style={styles.friendInfo}>
                <Text style={styles.friendName}>Maryland Winkles</Text>
                <Text style={styles.friendStatus}>Hutang</Text>
              </View>
              <View style={styles.statusIcon} />
            </View>
          </ScrollView>
        </View>
      </View>
      
      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>Tetap Terhubung,{'\n'}Split dengan Percaya Diri</Text>
        <Text style={styles.description}>
          Kelola teman-teman Patungan kamu dengan mudah.{'\n'}
          Tambah, hapus, dan tetap update dengan siapa{'\n'}
          kamu lagi split bareng.
        </Text>
        
        {/* Pagination dots */}
        <View style={styles.pagination}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        
        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
            <Text style={styles.getStartedText}>Get Started</Text>
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
  friendsList: {
    flex: 1,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  friendAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8E8E8',
    marginRight: 12,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  friendStatus: {
    fontSize: 12,
    color: '#666',
  },
  statusIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFB800',
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
  getStartedButton: {
    backgroundColor: '#FFB800',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  getStartedText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});