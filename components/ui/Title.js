import React from 'react'
import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/Colors';

const Title = ({ children }) => {
  return (
      <Text style={styles.title}>{children}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        padding: 10,
        marginVertical: 10,
        color: Colors.prime1,
        textAlign: 'center',
        borderBottomColor: Colors.textInp,
        borderBottomWidth: 1,
    }
})