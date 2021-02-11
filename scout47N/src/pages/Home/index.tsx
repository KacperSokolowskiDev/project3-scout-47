import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

import ViewPager from '@react-native-community/viewpager';

import server from '../../../server.json';
import Feed from './Feed';
import axios from 'axios';
import { Container, Header, Text, Tab, Separator } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJQaWVycmUiLCJsYXN0bmFtZSI6IkdpZGRpb0Jhc3RpYSIsImVtYWlsIjoicGllcnJlZ2lkZGlvc2Nvb3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaSR2PTE5JG09NDA5Nix0PTMscD0xJC96QnFZdnNQb1pSTzEweXFqdjRrQmdKaXRvRTFaOWdDNVdvMmozREFvT2ska0I4L3FXZTBFY3VJZjUza0FEQTBmVGYrU1dNZ1B6Y2V2YTcvZlhrUnU5YyIsInRlbGVwaG9uZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJQcml2aWxlZ2UiOnsiaWQiOjQsInJvbGUiOiJzY291dCIsImFnZUdyYWRlIjpbMjAwNSwyMDA0XSwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJVc2VySWQiOjR9fSwiaWF0IjoxNjEyMzU5MDA5LCJleHAiOjE2MTIzODA2MDl9.9dYSs7xUXA7wjfrnTqq0yENBs8WxX_vg2EzCAiv1EL8`

const Home: React.FC = () => {
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState(0);
  const [data, setData] = useState([]);
  const [ageGrade, setAgeGrade] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        const user = JSON.parse(await AsyncStorage.getItem('user'));
        setAgeGrade(user.Privilege.ageGrade);

        let url = 'http://192.168.50.74:5000/api/evaluations';
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${JSON.parse(token)}` },
        });
        // console.log(response)
        // return respons e.data
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFeed();
  }, []);

  let grade = ageGrade.length ? `${ageGrade[active]}` : '  All';
  grade = grade.substr(2);

  return (
    <Container style={styles.container}>
      <Header>
        <Tab>
          <Text active={true}> Meilleures evaluations</Text>
        </Tab>
          <Separator>|</Separator>
       <Tab>
          <Text active={false}>{`Q-${grade}`}</Text>
        </Tab>
      </Header>
      {data.length ? (
        <ViewPager
          onPageSelected={e => {
            setActive(e.nativeEvent.position);
          }}
          orientation="vertical"
          style={{ flex: 1, marginTop: 100 }}
          initialPage={0}
        >
          {ageGrade.map(year => {
            let filt = data.filter(evaluation => {
              let date = new Date(evaluation.Player.birthdate);
              let bYear = date.getFullYear();
              console.log(bYear, year);
              return bYear === year;
            });
            return (
              <View key={year}>
                <Feed evaluations={filt} />
              </View>
            );
          })}
        </ViewPager>
      ) : (
        <Text>Loading...</Text>
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



export default Home;


