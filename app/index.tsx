import React from 'react';
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <View style={styles.logoSegment1} />
          <View style={styles.logoSegment2} />
        </View>
        <Text style={styles.appName}>Patungan</Text>
      </View>
      
      {/* Welcome Message */}
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeTitle}>Selamat Datang di Patungan!</Text>
        <Text style={styles.welcomeSubtitle}>
          Aplikasi untuk memudahkan patungan dan split bill bersama teman-teman
        </Text>
        
        <View style={styles.featureContainer}>
          <Text style={styles.featureTitle}>Fitur Utama:</Text>
          <Text style={styles.featureItem}>✓ Split bill otomatis</Text>
          <Text style={styles.featureItem}>✓ Kelola grup pengeluaran</Text>
          <Text style={styles.featureItem}>✓ Tracking hutang dan piutang</Text>
          <Text style={styles.featureItem}>✓ Notifikasi real-time</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'relative',
    marginBottom: 16,
  },
  logoSegment1: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FFB800',
  },
  logoSegment2: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    top: 20,
    left: 20,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: 1,
  },
  contentContainer: {
    alignItems: 'center',
    maxWidth: 300,
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  featureContainer: {
    alignSelf: 'stretch',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  featureItem: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    paddingLeft: 8,
  },
});
