import React, {useEffect, useState}  from "react";
import {
    View,
    Text,
    StatusBar,
} from 'react-native';
import axios from 'axios';
import io from "socket.io-client";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from "react-native-modal";
import TableCard from '../../components/tableCard/tableCard';
import DefaultButton from '../../components/buttons/defaultButton/defaultButton';
import styles from './styles';
import globalStyle from "../../globalStyles";
import Routes from '../../constants/routes';
import { ScrollView } from "react-native-gesture-handler";

const socket = io("http://192.168.0.183:3000");


export default function MainScreen({navigation,route}) {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalUpdated, setIsModalUpdated] = useState(false);
    const [orders, setOrders] = useState([]);
    const [modalContent, setModalContent] = useState([]);

    socket.once("orderPlaced", (data) => {
        console.log("order placed:", data);
        fetchOrderData(data.userId);
    })
    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    useEffect(() => {
        
        getUserDetails().then((res) => {
            socket.emit("serverJoin", { 
                userType: "server",
                userId : res.userId 
            });
            fetchOrderData(res.userId).then((res) => {
            });
        });
        
    }, []);


    const getUserDetails = async () => {
        const user = await AsyncStorage.getItem('@logged_user_key');
        return JSON.parse(user);
    }

    const fetchOrderData = async (id) => {
        const promiseArray = [];
        await axios.get(`http://192.168.0.183:3000/api/orders/server/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => {
            let response = [];
            const orders = res.data.data;
            orders.forEach((order) => {
                promiseArray.push(fetchOrderProducts(order.order_id).then((res) => {
                    console.log('Order Details',order.order_id)
                        let data = {
                            order_id : order.order_id,
                            table_no : order.table_no,
                            status : order.status,
                            items : res.data
                        }
                        response.push(data);
                        // if (index === array.length - 1) resolve();
                    }));
            });

            Promise.all(promiseArray)
            .then((res) => {
                console.log('done');
                setOrders(response);
            })
            // var promise = new Promise((resolve, reject) => {
            //     orders.forEach((order, index, array) => {
            //         fetchOrderProducts(order.order_id)
            //         .then((res) => {
            //         console.log('Order Details',order.order_id)
            //             let data = {
            //                 order_id : order.order_id,
            //                 table_no : order.table_no,
            //                 status : order.status,
            //                 items : res.data
            //             }
            //             response.push(data);
            //             if (index === array.length - 1) resolve();
            //         });
                    
            //     });
            // })
            // promise.then(() => {
            //     console.log(response);
            //     setOrders(response);
            // });

        })
    }

    const fetchOrderProducts = async (id) => {
        return new Promise((resolve) => {
            const results = axios.get(`http://192.168.0.183:3000/api/orders/serverOrder/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
            })
        .then((res) => {
            resolve(res.data);
        })
        return results;
        })
        
    }


    const updateModalContent = async (order)  => {
        await setModalContent(order);
        setIsModalUpdated(true); 
        toggleModal(); 
    }


    return(
        <>
            <StatusBar
                barStyle="dark-content"
                hidden={false}
                backgroundColor="#ffff"
                translucent={true}
            />
            <View style={globalStyle.container}>
                <View style={globalStyle.content}>
                    <Text style={styles.head}>Your Live Orders</Text>
                    <View style={styles.row}>
                        {orders.map((order) => {
                            return (
                                <TableCard data={order} key={order.order_id}  onPress={() => {updateModalContent(order);}} />
                            )
                        })}
                    </View>
                </View>
            </View>
            <Modal 
                animationType="slide" 
                isVisible={isModalVisible} 
                style={{margin:0}} 
                propagateSwipe={true} 
                onBackdropPress={toggleModal} 
                onBackButtonPress = {toggleModal}
            >
               <View style={styles.modal}>
                <ScrollView>
                    <View style={[globalStyle.content, {marginBottom: '5%'}]}>
                        <Text style={styles.modalHead}>Table No: {modalContent.table_no ? modalContent.table_no : ''}</Text>
                        <Text style={globalStyle.text}>Order No: {modalContent.order_id ? modalContent.order_id : ''}</Text>
                        <View style={globalStyle.mt5}>
                            <Text style={globalStyle.mdHead}>Item Details</Text>
                        </View>
                        {isModalUpdated ? modalContent.items.map((item) => {
                            return (
                                <View style={[globalStyle.row, globalStyle.mt2]} key={item.product_name}>
                                    <View style={styles.itemNameView}>
                                        <Text>{item.product_name} x {item.quantity}</Text>
                                    </View>
                                    <View style={styles.priceView}>
                                        <Text>Rs. 250</Text>
                                    </View>
                                </View>
                            )
                            
                        }) : ''}
                        
                    </View>
                    {/* <Button title="Hide modal" onPress={toggleModal} /> */}
                    </ScrollView>
                    <View style={globalStyle.content}>
                        <DefaultButton title = "Mark as Served" />
                    </View>
                </View>
            </Modal>
        </>
    )
}