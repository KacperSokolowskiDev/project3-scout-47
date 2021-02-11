import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import avatar from '../../assets/avatar.png';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const Me: React.FC = () => {
  const [user, setUser ] = useState({})

  useEffect(() => {
    const getUser = async () => {
      const user = JSON.parse(await AsyncStorage.getItem("user"));
      setUser(user)
    }

    getUser()
  }, [])
  

  return (
    <Container>
      <Header>
        <AntDesign
          style={{ position: 'absolute', left: 10, top: 10 }}
          name="adduser"
          size={24}
          color="black"
        />
        <Title>{user.firstname} {user.lastname}</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <FontAwesome
          style={{ position: 'absolute', right: 13, top: 12 }}
          name="ellipsis-v"
          size={24}
          color="black"
        />
      </Header>
      <ScrollView>
        <Content>
          <Avatar source={avatar} />
          <Username>{user.email}</Username>
          <Stats>
            <StatsColumn>
              <StatsNumber>1950</StatsNumber>
              <StatsText>Evaluations</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>650</StatsNumber>
              <StatsText>Players</StatsText>
            </StatsColumn>
          </Stats>
          <ProfileColumn>
            <ProfileEdit>
              {user.Privilege?.ageGrade?.map((year) => <ProfileText>{year}</ProfileText>)}
            </ProfileEdit>
            <Bookmark name="bookmark" size={24} color="black" />
          </ProfileColumn>

          <StatsText>+452 {user.telephone}</StatsText>
        </Content>
      </ScrollView>
    </Container>
  );
};

export default Me;
