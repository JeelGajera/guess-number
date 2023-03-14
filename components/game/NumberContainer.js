import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        borderWidth: 2,
        borderColor: Colors.prime2,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 22,
        color: Colors.textInp,
    },
})