import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const App = () => {
  const [guess, setGuess] = useState("");
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState("Enter a number between 1 and 100");
  const [guessCount, setGuessCount] = useState(0);

  const handleGuess = () => {
    setGuessCount(prevCount => prevCount + 1);
    if (parseInt(guess) === randomNum) {
      setMessage(`Congrats! You guessed the number in ${guessCount} tries`);
    } else if (parseInt(guess) > randomNum) {
      setMessage(`The number is lower than ${guess}. Guess again.`);
    } else {
      setMessage(`The number is higher than ${guess}. Guess again.`);
    }
  };

  return (
    <View style={{ padding: 40 }}>
      <Text>{message}</Text>
      <TextInput
        keyboardType="number-pad"
        style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}
        onChangeText={setGuess}
        value={guess}
      />
      <Button title="Make a Guess" onPress={handleGuess} />
    </View>
  );
};

export default App;