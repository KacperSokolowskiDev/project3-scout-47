import React from 'react';
import { Image, Animated, Easing, Text } from 'react-native';

import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

// import musicFly from '../../../assets/lottie-animations/music-fly.json';

import {
  Container,
  Details,
  Actions,
  User,
  Tags,
  Music,
  MusicBox,
  BoxAction,
  TextAction,
} from './styles';

const Feed = ({ evaluations }) => {
  console.log('in feeeeeedd');
  const spinValue = new Animated.Value(0);
  console.log('evals inside', evaluations);
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true,
    }),
  ).start();

  const rotateProp = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,.3)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '70%',
        }}
      />
      {evaluations.length ? (
        evaluations.map((evaluation, i) => {
          console.log('and noww');
          const { Player, Criterion, description, score, date } = evaluation;
          console.log(Criterion);
          return (
            <Details key={`${i}-play`}>
              <User>
                {date} – {Player.firstname} {Player.lastname}
              </User>
              <Tags>{description}</Tags>
              <Tags>
                {score} / 10 {Criterion.name}
              </Tags>
            </Details>
          );
        })
      ) : (
        <Text>Loading</Text>
      )}

      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.4)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%',
        }}
      />
    </>
  );
};

export default Feed;
