import { Pressable, Text } from "react-native";
import styles from "./styles";
import colors from '../../../constants/colors';

export default DefaultButton = (props) => {
    return (
        <Pressable style={styles.button} onPress={props.onPress} android_ripple={{color: 'red', borderless: false}}>
            <Text style={styles.text}>{props.title}</Text>
        </Pressable>
    )
}