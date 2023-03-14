import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOverScreen = ({ roundNum, userNumber, onNewGame}) => {
  return (
    <View style={styles.container}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/images/win.webp')} style={styles.image} resizeMode="center" />
        </View>
        <Text style={styles.text}>
            Your phone needed <Text style={styles.highlight}>{roundNum}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onNewGame}>Start New Game</PrimaryButton>
    </View>
  )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    container: {
        marginVertical: 50,
        padding: 10,
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 200,
    },
    text: {
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
    },
    highlight: {
        color: '#f00',
        fontWeight: 'bold',
    }
})