import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>Mahesh Prajapati</Text>
      <Text style={styles.detail}>B.Tech in Computer Science and Design Engineering at RGIPT</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Programming</Text>
        <Text style={styles.text}>C/C++, Python, JavaScript, MySQL</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Tools & OS</Text>
        <Text style={styles.text}>Git, Windows</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Libraries/Frameworks</Text>
        <Text style={styles.text}>React, Tailwind CSS</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Web Skills</Text>
        <Text style={styles.text}>HTML, CSS, JavaScript, ReactJS</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f0f4f8',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 6,
  },
  detail: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#666',
  },
});

export default ProfileScreen;
