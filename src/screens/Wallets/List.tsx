import React from 'react';
import { Text } from 'galio-framework';
import { FlatList, StyleSheet, View, Image, Platform } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import HeaderTitle from "../../components/HeaderTitle";
import API from "../../utils/api";
import { databaseRef, storageRef } from '../../utils/firebase';

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
class WalletsListScreen extends React.Component {
  state = {
    listEX: []
  };
  componentDidMount() {
    databaseRef.ref('users/').child(12).child('pics').on('value', (snapshot) => {
      let values = Object.keys(snapshot.val());

      let objects = Object.values(snapshot.val()).map((item, index) => {
        return {
          id: values[index],
          avatar_url: 'https://www.canada.ca/content/dam/canada/activities/20200113-2-520x200.jpg',
          name: 'uno'
        }
      }).reverse();
      this.setState({ listEX: objects })
    });
  };
  render() {
    console.warn(this.state.listEX);
    return (
      <View style={S.container}>
        <HeaderTitle title="Wallets" />
        <FlatList
          style={S.content}
          data={this.state.listEX}
          renderItem={({ item }) => (
            <Card key={item.id} title="CARD WITH DIVIDER">
              {
                <View>
                  <Image
                    style={S.itemImage}
                    source={{ uri: item.avatar_url }}
                  />
                  <Text  >{item.id}</Text>
                </View>
              }
            </Card>
          )}
        />
      </View>
    );
  }
};

export default WalletsListScreen;