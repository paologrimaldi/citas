/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Appbar, Button, Modal} from 'react-native-paper';
function App(): JSX.Element {
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content color="#6d28D9" title="Aplicacion de citas" />
      </Appbar.Header>
      <Button style={styles.btnAdd} mode="contained" onPress={showModal}>
        Agregar Cita
      </Button>

      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnAdd: {
    marginHorizontal: 30,
    marginTop: 20,
  },
  container: {
    backgroundColor: '#DDDDDD',
    flexGrow: 1,
  },
  titulo: {
    marginTop: 10,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '800',
  },
});

export default App;
