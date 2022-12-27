import { Platform,StatusBar,StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import fontFamily from "./constants/fontFamily";

const globalStyle = StyleSheet.create({
    //Layout & Positioning
    container: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },

    content : {
        padding: '3%'
    },

    fullScreen: {
        width: '100%',
        height: '100%'
    },

    row : {
        flexDirection: 'row'
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },


    // Typography
    text: {
        fontFamily: fontFamily.Regular,
        fontSize: RFPercentage(2),
        color: '#000',
        lineHeight: RFPercentage(2)
    },

    mdHead: {
        fontFamily: fontFamily.Semibold,
        fontSize: RFPercentage(2),
        color: '#000'
    },



    // Margins
    mt2 : {
        marginTop: '2%'
    },

    mt5 : {
        marginTop: '5%'
    }

    
  });
  
  export default globalStyle;
  