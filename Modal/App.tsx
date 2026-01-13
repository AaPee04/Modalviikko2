import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Alert, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { showAlert } from './utils.ts/alert';

export default function App() {

  const ok = () => {
    console.log('Ok pressed')
  }

  const cancel = () => {
    console.log('Cancel pressed')
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.container}>
          <Pressable onPress={() => showAlert({ title: 'Test', message: 'This is message', onCancel: cancel, onOk: ok })}>
            <Text>Open Alert</Text>
          </Pressable>
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
