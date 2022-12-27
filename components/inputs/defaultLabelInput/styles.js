import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import fontFamily from "../../../constants/fontFamily";

const styles = StyleSheet.create({
    container: {
        marginVertical: '1%',
    },

    label: {
        fontFamily: fontFamily.Regular,
        fontSize: RFPercentage(2.2),
        color: '#000'
    },

    input: {
        borderColor: '#828282',
        borderWidth: 0.4,
        borderRadius: 3,
        paddingHorizontal: 15,
        marginTop: '1%',
        fontFamily: fontFamily.Regular,
    }
    
});
  
export default styles;
  