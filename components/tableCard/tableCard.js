import { Pressable, View, Text } from "react-native";
import styles from './styles'; 

export default TableCard = (props) => {
    return (
        <Pressable onPress={props.onPress} style={[styles.tableCard, {backgroundColor: props.data.status === 3 ? '#fafffc' : '#faf0f0'}]}>
            
            <Text style={styles.table}>Table</Text>
            <Text style={styles.tableNo}>{props.data.table_no < 10 ? `0${props.data.table_no}` : props.data.table_no}</Text>
            {props.data.status == 3 ? <View style={styles.notificationIndicator}></View> : ''}
            <View style={[styles.statusView, {backgroundColor: props.data.status == 3 ? '#03a850' : 'red'}]}>
                <Text style={styles.statusText}>{props.data.status === 3 ? 'Ready' : 'Preparing'}</Text>
            </View>
            
        </Pressable>
    )
}