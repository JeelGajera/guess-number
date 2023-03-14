import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../../constants/Colors';

const PrimaryButton = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress} >
            <View>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    text: {
        color: Colors.btnTxt,
        fontSize: 18,
        backgroundColor: Colors.btnBg,
        padding: 6,
        margin: 10,
        minWidth: 100,
        textAlign: 'center',
        borderRadius: 100,
    },

});