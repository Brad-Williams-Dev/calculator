import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonsLayout from './components/ButtonsLayout';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ButtonsLayout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
