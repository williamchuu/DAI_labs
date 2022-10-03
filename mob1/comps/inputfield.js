import React from 'react';
import { StyleSheet } from 'react-native';

import { useState } from 'react';
import { ApplicationProvider, Layout, Text, Button, Input } from '@ui-kitten/components';

const Styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        alignItems: 'center',
        color: 'red',
        paddingTop: 50 ,
        margin: 10
    },
    text: {
        marginHorizontal: 8,
    },
});

export const InputField = () => {

    const [value, setValue] = React.useState('');
    return (
        <Layout style={Styles.container}>
            <Input
                placeholder='Email'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
            <Input
                placeholder='Password'
                value={value}
                onChangeText={nextValue => setValue(nextValue)}
            />
        </Layout>
    );
};