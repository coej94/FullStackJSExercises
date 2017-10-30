import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Button = ({onPress}) => {
    return(
        <TouchableOpacity>
            <Text>Hej</Text>
        </TouchableOpacity>
    )
}

const Style = {
    button: {
        margin: 10,
        border: 1
    }
};