import React from 'react';
import { StyleSheet } from 'react-native';

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
const Login = async () => {
    setLoginState("during");
    // await new Promise(resolve => setTimeout(resolve, 2000));
    setLoginState("after");
    // await new Promise(resolve => setTimeout(resolve, 2000));
    r.push("./screens.main.js");
}

// login button
export const LoginBtn = ({
    onLoginClick = () => { }
    

}) => {
    var color = "red" // this isn't working?
    var btn_txt = "Login";
    var [loginState, setLoginState] = useState("before")

    if (loginState === "before") {
        color = "red";
        btn_txt = "Login";
    }

    if (loginState === "during") {
        color = "green";
        btn_txt = "logging in";
    }

    if (loginState === "after") {
        color = "grey",
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
            r.push("./screens.main.js");
        }
    }

    return (

        <Layout style={styles.container}>
            <Button
                color={color}
                loginState={loginState}
                onClick={() => Login()}
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
