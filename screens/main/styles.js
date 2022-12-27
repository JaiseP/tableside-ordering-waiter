import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import fontFamily from "../../constants/fontFamily";

const styles = StyleSheet.create({
    head : {
        fontFamily: fontFamily.Bold,
        fontSize: RFPercentage(3),
        color: '#000',
    },
    row : {
        flexDirection : 'row',
        flexWrap: 'wrap',
    },

    modal : {
        height: '50%', 
        marginTop: 'auto',
        backgroundColor:'#fff'
    },

    modalHead : {
        fontFamily: fontFamily.Bold,
        fontSize: RFPercentage(3),
        color: '#000',
    },

    itemNameView : {
        width: '70%',
    },

    priceView : {
        width: '30%',
        alignItems: 'flex-end'
    }
    
});
  
export default styles;
  