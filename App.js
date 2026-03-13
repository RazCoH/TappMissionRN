import { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const COLORS = ['#E63946', '#2A9D8F', '#E9C46A', '#264653', '#6A4C93'];

export default function App() {
  const [colorIndex, setColorIndex] = useState(0);

  const toggleColor = () => {
    setColorIndex((prev) => (prev + 1) % COLORS.length);
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
    gap: 32,
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
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
