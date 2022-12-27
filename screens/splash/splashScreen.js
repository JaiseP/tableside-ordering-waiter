import React, {useEffect}  from "react";
import {
    View,
    Image,
    StatusBar
} from 'react-native';
import styles from './styles';
import Routes from '../../constants/routes';

export default function SplashScreen({navigation,route}) {
    useEffect(() => {
        setTimeout(async () => {
            navigation.navigate(Routes.LOGIN);
          }, 2000);
    })
    return(
        <>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#ffff"
                translucent={true}
            />
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../../assets/images/kanthari_logo.png')} />
            </View>
        </>
    )
}