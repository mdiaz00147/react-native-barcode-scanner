import React from 'react';
import { Text } from 'galio-framework';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const S = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 0,
    padding: hp("2%"),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(97, 118, 236)'
  },
  text:{
    color: 'rgb(24, 39, 75)'
  }
});

const HeaderTitle = ({ title }) => (
  <View style={S.container}>
    <Text style={S.text} p >
      {title}
    </Text>
  </View>
);

export default HeaderTitle;