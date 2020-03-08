import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Client from "./Client";


export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Welcome
      </Text>
      <Client />
    </View>
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
