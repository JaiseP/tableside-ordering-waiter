import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import fontFamily from "../../constants/fontFamily";

const style = StyleSheet.create({
    logo: {
        width: 300,
        height: 150,
    },

    loginContainer: {
        justifyContent:'flex-start', 
        width:'100%',
        paddingHorizontal: '10%', 
        marginVertical: '5%'
    },

    head : {
        fontSize: RFPercentage(3),
        fontFamily: fontFamily.Bold,
        marginBottom: '2%',
        color: '#000'
    } 
    
  });
  
  export default style;
  