import React from 'react';
import { StyleSheet } from 'react-native';

import { useState } from 'react';
import { ApplicationProvider, Layout, Text, Button, Input, Datepicker, Icon } from '@ui-kitten/components';

export const DatepickerSimple = () => {

    const [date, setDate] = React.useState(new Date());

    return (
        <Layout style={styles.container} level='1'>

            <Text category='h6'>
                Selected date: {date.toLocaleDateString()}
            </Text>

            <Datepicker
                date={date}
                onSelect={nextDate => setDate(nextDate)}
            />

        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 376,
        marginTop: 20,
        margin: 10
    },
});