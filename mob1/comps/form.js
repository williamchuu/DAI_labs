import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { ApplicationProvider, Layout, Text, Button, Input } from '@ui-kitten/components';

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        alignItems: 'center',
        color: 'red', //inactive
       padding: 20
    },
    text: {
        marginHorizontal: 8,
    },
});


{/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Details Screen</Text>
</View> */}


// login button
export const LoginBtn = ({
    onLoginClick = () => { }
    

}) => {
    let status = "success" // this isn't working?
    let btn_txt = "Login";
    let [loginState, setLoginState] = useState("before")

    if (loginState === "before") {
        status = "success";
        btn_txt = "Login";
    }

    if (loginState === "during") {
        status = "green";
        btn_txt = "logging in";
    }

    if (loginState === "after") {
        status = "basic",
            btn_txt = "yay";
    }

    const HandleButton = () => {
        if (loginState === "before") {
            setLoginState("during");
        }
        if (loginState === "during") {
            setLoginState("after");
        }
        if (loginState === "after") {
            navigation.navigate("./screens.main.js");
        }
    }

   

    const Login = async () => {
        setLoginState("during");
        await new Promise(resolve => setTimeout(resolve, 2000));
        setLoginState("after");
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    return (

        <Layout style={styles.container}>
            <Button
                status={status}
                loginState={loginState}
                onPress={() => Login()}
                // onClick={() => navigation.navigate('main')}
            // onLoginClick={()=>Login()}
            >
                {btn_txt}
            </Button>
        </Layout>
    )

};



export const HomeScreen = () => {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
