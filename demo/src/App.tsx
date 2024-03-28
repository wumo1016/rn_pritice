/*
 * @Description:
 * @Author: wyb
 * @LastEditors: wyb
 * @LastEditTime: 2024-03-27 11:23:07
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Text,
  TextInput,
} from 'react-native';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#fff',
  };
  const value = '';
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ ...backgroundStyle }}>
        <View style={{ ...backgroundStyle, height: '100%' }}>
          <Text>666</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
