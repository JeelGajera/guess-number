import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';

const GameScreen = ({ userChoice, onGameOver, onRound }) => {

    function generateRandomNumber(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min) + min);
        if (rndNum === exclude) {
            return generateRandomNumber(min, max, exclude);
        } else {
            return rndNum;
        }
    };

    let min = 1;
    let max = 100;
    const initialGuess = generateRandomNumber(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [rounds, setRounds] = useState([initialGuess]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userChoice) ||
            (direction === 'greater' && currentGuess > userChoice)) {
            Alert.alert("Hey!..", "You know that this is wrong...", [{ text: "Sorry!", style: "cancel" }]);
            return;
        }
        if (direction === 'lower') {
            max = currentGuess;
        } else {
            min = currentGuess + 1;
        }
        const newRndNum = generateRandomNumber(min, max, currentGuess);
        setCurrentGuess(newRndNum);
        setRounds(curRounds => [newRndNum, ...curRounds]);
    };

    useEffect(() => {
        if (currentGuess === userChoice) {
            // Alert.alert("Congratulations!", "You guessed the number!", [{text: "OK", style: "cancel"}]);
            onGameOver();
        }
        onRound(rounds.length);
    }, [currentGuess, userChoice, onGameOver, onRound]);

    useEffect(() => {
        min = 1;
        max = 100;
    }, []);

    return (
        <View style={styles.container}>
            <Title style={styles.title}>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text style={styles.text}>Higher or lower?</Text>
                <View style={styles.row}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color={Colors.btnTxt} />
                    </PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color={Colors.btnTxt} />
                    </PrimaryButton>
                </View>
            </View>
            <View style={styles.logs}>
                <FlatList
                    data={rounds}
                    renderItem={(itemData) =>
                        <Text style={styles.list}>-{itemData.item}</Text>
                    }
                    keyExtractor={(item) => item}
                    numColumns={10}
                />
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        marginHorizontal: 20,
        padding: 10,
        alignItems: 'center',
        backgroundColor: Colors.primeBg,
        elevation: 8,
        borderRadius: 20,
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        color: Colors.prime2,
        fontSize: 20,
        marginVertical: 10,
        textAlign: 'center',
    },
    logs: {
        width: '100%',
        height: 100,
    },
    list: {
        color: Colors.prime2,
        margin: 3,
    }
});