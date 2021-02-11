import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { Container, Search, Header, Input } from './styles';

import Card from './Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Players: React.FC = ({ navigation, route }) => {
  const [search, setSearch] = useState('');

  const [download, setDownload] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [listPlayers, setListPlayers] = useState([]);
  //const [offset, SetOffset] = useState(0);

  const [onEndListReached, setOnEndListReached] = useState(true);

  const fetchListPlayer = async () => {
    // const value = { offset: offset };
    let url = `http://192.168.50.74:5000/api/players/`;
    try {
      // const token = await AsyncStorage.getItem("token");

      const token = await AsyncStorage.getItem('token');
      // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJQaWVycmUiLCJsYXN0bmFtZSI6IkdpZGRpb0Jhc3RpYSIsImVtYWlsIjoicGllcnJlZ2lkZGlvc2Nvb3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaSR2PTE5JG09NDA5Nix0PTMscD0xJC96QnFZdnNQb1pSTzEweXFqdjRrQmdKaXRvRTFaOWdDNVdvMmozREFvT2ska0I4L3FXZTBFY3VJZjUza0FEQTBmVGYrU1dNZ1B6Y2V2YTcvZlhrUnU5YyIsInRlbGVwaG9uZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJQcml2aWxlZ2UiOnsiaWQiOjQsInJvbGUiOiJzY291dCIsImFnZUdyYWRlIjpbMjAwNSwyMDA0XSwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJVc2VySWQiOjR9fSwiaWF0IjoxNjEyMzU5MDA5LCJleHAiOjE2MTIzODA2MDl9.9dYSs7xUXA7wjfrnTqq0yENBs8WxX_vg2EzCAiv1EL8`
      console.log('token in appmobil', token);
      if (token === null) {
        console.log('no token');
        throw new Error('Not logged in');
      }

      const response = await axios.get(url, {
        headers: { Authorization: `Bearer ${JSON.parse(token)}` },
      });

      console.log('response', response);
      const listPlayersUpdated = response.data;
      console.log('data', listPlayersUpdated);
      //setShouldFetch(false);
      setListPlayers(listPlayersUpdated);
      //setListPlayers((listPlayers) => [...listPlayers, ...listPlayersUpdated]);
      //SetOffset(offset + 5);
      setDownload(true);
    } catch (error) {
      console.log(error);
    }
  };

  // const searchPlayer = async () => {
  //   let url = `http://192.168.50.74:5000/api/players/`;
  //   try{
  //     const token = await AsyncStorage.getItem('token');
  //     if (token === null) {
  //       console.log('no token');
  //       throw new Error('Not logged in');
  //     }
  //     const response = await axios.get(url, {
  //       headers: { Authorization: `Bearer ${JSON.parse(token)}` },
  //     });

  //   }
  // }


  useEffect(() => {
    // if (!shouldFetch) {
    //   return;
    // }
    fetchListPlayer();
  }, []);

  return (
    <Container style={styles.container}>
      <Header>
        <Search>
          <AntDesign
            style={{
              paddingRight: 10,
            }}
            name="search1"
            size={18}
            color="#838383"
          />
          <Input
            placeholder="Search"
            value={search}
            returnKeyType="search"
            onChangeText={text => setSearch(text)}
          />
        </Search>
        <AntDesign
          onPress={() => navigation.navigate('AddPlayer')}
          style={{ position: 'absolute', right: -12, top: 10 }}
          name="adduser"
          size={25}
          color="black"
        />
        {/* <Ionicons name="md-qr-scanner" onPress={() => navigation.navigate("AddPlayer")} size={25} color="black" /> */}
      </Header>

      {download ? (
        <FlatList
          onScrollBeginDrag={() => {}}
          onScrollEndDrag={() => setOnEndListReached(false)}
          onEndReachedThreshold={0}
          onMomentumScrollBegin={() => {
            setOnEndListReached(false);
          }}
          // Allow to detect the end of the flat list
          onEndReached={({ distanceFromEnd }) => {
            fetchListPlayer();
          }}
          data={listPlayers}
          keyExtractor={player => player.id.toString()}
          renderItem={({ item }) => {
            console.log('item', item);

            return (
              <Card
                lastname={item.lastname}
                firstname={item.firstname}
                picture={item.picture}
                //club={item.club}
                //logo={"https://source.unsplash.com/random"}
                onPress={ async () => {
                  try{
                    AsyncStorage.setItem("focusedPlayer",JSON.stringify(item));
                    navigation.navigate('Player', {
                      ...item,
                    })
                  } catch (error){
                    console.log(error);
                  }

                  }
                }
              />
            );
          }}
        ></FlatList>
      ) : (
        <Text>No player Loaded</Text>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(91, 87, 115)',
    height: 1000,
  },
});


export default Players;
