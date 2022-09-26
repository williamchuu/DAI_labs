import { Provider as PaperProvider } from 'react-native-paper';
import Main from './screens/main';
import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function App() {
  return (
      <ApplicationProvider {...eva} theme={eva.light}>
      <Text>hi hi hi hi hi hi hi hi hi </Text>
    </ApplicationProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
