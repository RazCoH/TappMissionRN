import { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { updateWidget } from 'react-native-widget-sdk';

const COLORS = ['#E63946', '#2A9D8F', '#E9C46A', '#264653', '#6A4C93'];

export default function App() {
  const [colorIndex, setColorIndex] = useState(0);

  const toggleColor = () => {
    setColorIndex((prev) => (prev + 1) % COLORS.length);
  };

  const handleUpdateWidget = async () => {
    try {
      await updateWidget();
      Alert.alert('Success', 'Widget updated successfully!');
    } catch (e) {
      Alert.alert('Error', e.message);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: COLORS[colorIndex] }]}>
          Hello World
        </Text>
        <TouchableOpacity style={styles.button} onPress={toggleColor} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Toggle Color</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.widgetButton]} onPress={handleUpdateWidget} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Update Widget</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    letterSpacing: 1,
  },
  button: {
    backgroundColor: '#1A1A2E',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 12,
  },
  widgetButton: {
    backgroundColor: '#2A9D8F',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
