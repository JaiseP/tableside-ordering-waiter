import React, { useState } from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    StatusBar,
    SafeAreaView,
    Button
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DefaultLabelInput from "../../components/inputs/defaultLabelInput/defaultLabelInput";
import DefaultButton from "../../components/buttons/defaultButton/defaultButton";
import globalStyle from '../../globalStyles';
import styles from "./styles";
import Routes from "../../constants/routes";

export default function LoginScreen({navigation,route}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const onChangeUsername = (newValue)=>{
        setUsername(newValue);
      }

    const onChangePassword = (newValue)=>{
      setPassword(newValue);
    }

    const onLoginPress = () => {
        let data = JSON.stringify({
            username : username,
            password : password
        });

        let headers = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        
        axios.post('http://192.168.0.183:3000/api/users/login', data, headers)
        .then((res) => {
            if(res.data.success === 1) {
                if(saveUserLoggedStatus(res.data)) {
                    navigation.navigate(Routes.MAIN);
                }
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    const saveUserLoggedStatus = async (data) => {
        try {
            const loggedInUserValue = {
                loggedInStatus : true,
                userId: data.userId,
                username: data.username,
                userFullName : data.name,
                token : data.toekn
            } 
            await AsyncStorage.setItem('@logged_user_key', JSON.stringify(loggedInUserValue));
            return true;
          } catch (e) {
            console.log("Something Went Wrong");
          }
    }

    return(
        <>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#ffff"
                translucent={true}
            />
            <SafeAreaView style={globalStyle.container}>
                <View style={[globalStyle.fullScreen, globalStyle.center]}>
                    <Image style={styles.logo} source={require('../../assets/images/kanthari_logo.png')} />
                    <View style={styles.loginContainer}>
                        <Text style={styles.head}>Waiter Login</Text>
                        <DefaultLabelInput onChange={onChangeUsername} value={username} label="Enter Email Id" />
                        <DefaultLabelInput onChange={onChangePassword} value={password} label="Enter Password" passwordType={true} />
                        <View style={globalStyle.mt2}>
                            <DefaultButton title="Login" onPress={onLoginPress} />
                        </View>
                    </View>
                    <View>
                        <Text>Username:{username}</Text>
                    </View>
                    
                </View>
            </SafeAreaView>
        </>
    )
}