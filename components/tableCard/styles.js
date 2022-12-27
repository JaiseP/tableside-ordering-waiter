import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import fontFamily from "../../constants/fontFamily";

const styles = StyleSheet.create({

tableCard : {
    backgroundColor : '#fafffc',
    alignSelf: 'baseline',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:'4%',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
    width: 5,
    height: 10,
    },
    shadowOpacity: 0.23,
    shadowRadius: 1.62,
    elevation: 2,
    marginRight: '3%',
    marginBottom: '3%'
},
table : {
    fontFamily: fontFamily.Regular,
    fontSize: RFPercentage(2.3),
    lineHeight: RFPercentage(2.5),
    color: '#000'
},
tableNo : {
    fontFamily: fontFamily.Bold,
    fontSize: RFPercentage(5),
    lineHeight: RFPercentage(6),
    color: '#000',
    marginBottom: '5%'
},
statusView : {
    backgroundColor : '#03a850',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    alignItems: 'center'
},
statusText : {
    color: "#fff",
    fontFamily: fontFamily.Regular
},
notificationIndicator : {
    width: 10,
    height: 10,
    backgroundColor: 'green',
    position: 'absolute',
    top: -3,
    left: 5,
    borderRadius: 5,
}

});
  
export default styles;