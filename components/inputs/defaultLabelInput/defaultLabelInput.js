import React from "react"
import {View, Text, TextInput} from 'react-native';
import styles from "./styles";

export default DefaultLabelInput = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                placeholder={props.label}
                style={styles.input}
                value={props.value}
                secureTextEntry={props.passwordType}
                onChangeText={(text)=>{props.onChange(text)}}
            />
        </View>
    )
}