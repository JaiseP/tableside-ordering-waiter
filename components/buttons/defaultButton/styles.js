import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import fontFamily from "../../../constants/fontFamily";
import colors from "../../../constants/colors";

const styles = StyleSheet.create({
    button : {
        fontFamily: fontFamily.Bold,
        backgroundColor: colors.PrimaryThemeColor,
        paddingVertical: RFPercentage(1.5),
        borderRadius: 5
    },
    text: {
        color: '#fff',
        fontFamily: fontFamily.Bold,
        textTransform:'uppercase',
        textAlign: 'center'
    }
});
  
export default styles;
  