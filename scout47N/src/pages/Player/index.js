import React from 'react';
import { Image, StyleSheet, View, Text, ScrollView } from 'react-native';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import PDFReader from 'rn-pdf-reader-js';

import {
  Container,
  Title,
  Header,
  Avatar,
  Username,
  Content,
  Stats,
  Separator,
  StatsText,
  StatsColumn,
  StatsNumber,
  ProfileColumn,
  ProfileEdit,
  ProfileText,
  Bookmark,
} from './styles';
// import Text from "./Text";
// import defaultStyles from "../config/styles";

function Player({ navigation, route }) {
  console.log('ra', route);
  const {
    lastname,
    firstname,
    height,
    weight,
    birthdate,
    picture,
    position,
    strongFoot,
    schoolReport,
  } = route.params;
  console.log('school reapretetz ', schoolReport);
  let schoolreportplayer = schoolReport;
  // schoolreportplayer = schoolreportplayer.replace(/\\/, '\\\\');
  //console.log('sssss', schoolreportplayer);
  return (
    <Container>
      <Header>
        {/* <AntDesign
          style={{ position: 'absolute', left: 10, top: 10 }}
          name="adduser"
          size={24}
          color="black"
        /> */}
        <Title>
          {firstname} {lastname}
        </Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <FontAwesome
          style={{ position: 'absolute', right: 13, top: 12 }}
          name="ellipsis-v"
          size={24}
          color="black"
        />
      </Header>
      <ScrollView style={styles.scrollView}>
        <Content>
          <Avatar source={{ uri: picture }} />
          <Username>{position}</Username>
          <Stats>
            <StatsColumn>
              <StatsNumber>60%</StatsNumber>
              <StatsText>Psyc.</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>90%</StatsNumber>
              <StatsText>Phys.</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>50%</StatsNumber>
              <StatsText>Strat.</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>65%</StatsNumber>
              <StatsText>Tech.</StatsText>
            </StatsColumn>
          </Stats>
          <ProfileColumn>
            {/* <ProfileEdit>
              {Privilege?.ageGrade?.map((year) => <ProfileText>{year}</ProfileText>)}
            </ProfileEdit> */}
            <Bookmark name="bookmark" size={24} color="black" />
          </ProfileColumn>
          {/* <StatsText>+452 {telephone}</StatsText> */}
        </Content>
        <View style={{ height: 400 }}>
          <PDFReader
            source={{
              uri: `http://192.168.50.74:5000/${schoolreportplayer}`,
            }}
          />
        </View>
      </ScrollView>
      {/* <View style={{ height: 400 }}>
        <PDFReader
          source={{
            uri: `http://192.168.50.74:5000/${schoolreportplayer}`,
          }}
        />
      </View> */}
    </Container>
  );
}

export default Player;

const styles = StyleSheet.create({
  scrollView: {},
});
