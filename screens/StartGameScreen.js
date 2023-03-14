import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Alert, } from 'react-native'
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';

const StartGameScreen = ({ onSelected }) => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = ({ inputText }) => {
        setEnteredValue(inputText);
    };

    function resetButtonHandler() {
        setEnteredValue('');
    }

    function startButtonHandler() {
        const selectedNumber = parseInt(enteredValue);
        if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99) {
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetButtonHandler }]);
            return;
        }
        onSelected(selectedNumber);
    };

    return (
        <View>
            <Title>Guess My Number!</Title>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    maxLength={2}
                    keyboardType="numeric"
                    onChangeText={textNum => numberInputHandler({ inputText: textNum })}
                    value={enteredValue}
                />
                <View style={styles.buttoContainer}>
                    <PrimaryButton onPress={resetButtonHandler}>Reset</PrimaryButton>
                    <PrimaryButton onPress={startButtonHandler}>Start</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 50,
        marginHorizontal: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.primeBg,
        elevation: 8,
        borderRadius: 20,
    },
    textInput: {
        marginVertical: 10,
        color: Colors.textInp,
        width: 50,
        fontSize: 24,
        fontFamily: 'monospace',
        textAlign: 'center',
        borderBottomColor: Colors.prime1,
        borderBottomWidth: 2,
    },
    buttoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});