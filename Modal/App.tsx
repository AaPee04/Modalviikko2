import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Alert, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { showAlert } from './utils/alert';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const ok = () => {
    console.log('Ok pressed')
  }

  const cancel = () => {
    console.log('Cancel pressed')
  }


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal on suljettu.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Moi Maailma Modalilta!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Piilota Modal viesti</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Näytä Modal viesti</Text>
        </Pressable>
      </SafeAreaView>
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#b4bbff',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#ff0000',
  },
  buttonClose: {
    backgroundColor: '#008cff',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});