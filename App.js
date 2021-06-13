import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);

  const startGame = () => {
    setStarted(true);
  }

  const countUp = () => {
    setCount(count+1);
  }

  const countDown = () => {
    setCount(count-1);
  }

  return (
    <View style={styles.container}>
      {
        started ? (
          <>
            <Text style={styles.displayText}>{count}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Count Up" onPress={countUp} style={styles.buttonText}/>
              <Button title="Count Down" onPress={countDown} style={styles.buttonText}/>
            </View>
          </>
        ) : (
          <>
            <Text style={styles.displayText}>Tap On Button to start</Text>
            <Button title="Start" onPress={startGame} style={styles.buttonText}/>
          </>
        )
      }
      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  displayText:{
    fontSize: 48,
    fontWeight:"700",
    marginBottom:200,
  },
  buttonContainer:{
    display: "flex",
    flexDirection: "row",
    width: "60%",
    justifyContent:"space-between",
  },
  buttonText:{
    borderRadius:15,
  }
});
