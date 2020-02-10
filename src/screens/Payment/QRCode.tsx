import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import HeaderTitle from "../../components/HeaderTitle";

export default function QRCodeScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const S = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 22,
      backgroundColor: 'rgb(97, 118, 236)'
    },
    content: {
      backgroundColor: 'rgb(10, 18, 39)',
      height: hp("100%")
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    itemImage: {
      width: ("100%"),
      height: hp("25%")
    }
  });

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scannedeee!`);
  };

  // if (hasPermission === null) {
  //   return <Text>Requesting for camera permission</Text>;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }

  return (

    <View style={S.container} >
      <HeaderTitle title="Send" />
      <View style={S.content} >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={S.itemImage}
        />

        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>

    </View>
  );
}