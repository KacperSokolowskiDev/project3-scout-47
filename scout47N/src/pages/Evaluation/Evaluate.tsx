import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';
// import styled from 'styled-components/native';

// // interface Props {
// //   home: boolean;
// // }

// export const Container = styled.View`
//   top: 3px;
//   width: 45px;
//   height: 30px;
//   justify-content: center;
//   border-radius: 10px;
//   align-items: center;
//   background: ${(props: Props) => (props.home ? '#fff' : '#000')};
//   border-left-width: 3px;
//   border-left-color: #20d5ea;
//   border-right-width: 3px;
//   border-right-color: #ec376d;
// `;

// export const Button = styled.TouchableOpacity.attrs({
//   activeOpacity: 1,
// })``;

// const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjo0LCJmaXJzdG5hbWUiOiJQaWVycmUiLCJsYXN0bmFtZSI6IkdpZGRpb0Jhc3RpYSIsImVtYWlsIjoicGllcnJlZ2lkZGlvc2Nvb3RAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkYXJnb24yaSR2PTE5JG09NDA5Nix0PTMscD0xJC96QnFZdnNQb1pSTzEweXFqdjRrQmdKaXRvRTFaOWdDNVdvMmozREFvT2ska0I4L3FXZTBFY3VJZjUza0FEQTBmVGYrU1dNZ1B6Y2V2YTcvZlhrUnU5YyIsInRlbGVwaG9uZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJQcml2aWxlZ2UiOnsiaWQiOjQsInJvbGUiOiJzY291dCIsImFnZUdyYWRlIjpbMjAwNSwyMDA0XSwiY3JlYXRlZEF0IjoiMjAyMS0wMi0wMyIsInVwZGF0ZWRBdCI6IjIwMjEtMDItMDMiLCJVc2VySWQiOjR9fSwiaWF0IjoxNjEyMzU5MDA5LCJleHAiOjE2MTIzODA2MDl9.9dYSs7xUXA7wjfrnTqq0yENBs8WxX_vg2EzCAiv1EL8`

// import Button from "../components/Button";
// import Text from "../components/Text";
// import Button from "../components/Button";
// import Screen from "../components/Screen";
// import "brown"g/styles";
// import TextInput from "../components/TextInput";

function Evaluate({ player, isVideoEvaluation, close, }) {
  const [download, setDownload] = useState(false);
  const [desc, setDesc ] = useState("");
  const [listCriteria, setListCriteria] = useState([]);
  const [evaluation, setEvaluation] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedCriterion, setSelectedCriterion] = useState(null);
  const [score, setScore] = useState(0);
  
  const navigation = useNavigation();
  


  const FetchCriteria = async () => {
    console.log('dans fecth criteria');
    try {
      let res = await axios.get('http://192.168.50.74:5000/api/criteria');

      let result = res.data;
      setListCriteria(result);
      console.log('recule dans fectch critieria', result);
      setDownload(true);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementScore = () => {
      if(score >= 10){
        setScore(10);
      }else{
        setScore(score + 1);
      }

  }

  const decrementScore = () => {
    if(score <= 1){
      setScore(1);
    }else{
      setScore(score - 1);
    }
  }

  const clear = () => {
    setScore(0);
    setSelectedCriterion(null);
    setSelectedGroup(null);
  };

  useEffect(() => {
    FetchCriteria();
  }, []);

  // const setDescription = (value, description, id) => {
  //   console.log('value', value, 'description', description, 'id', id);
  //   const newList = listCriteria.map(criteria => {
  //     if (criteria.id === id) {
  //       criteria.description = value;
  //     }
  //     return criteria;
  //   });
  //   setListCriteria(newList);
  // };

  const setDescription = (value) => {
    console.log('value', value);
    setDesc(value);
    
  }

  const postEvaluation = async () => {
    var today = new Date(),
      date =
        today.getFullYear() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getDate();
    const newEvaluation = {
      PlayerId: player.id,
      CriterionId: selectedCriterion,
      score: score,
      date: date,
      description: desc,
    };
    console.log('new eval', newEvaluation);
    try {
      const token = await AsyncStorage.getItem('token');

      let res = await axios.post(
        'http://192.168.50.74:5000/api/evaluations',
        newEvaluation,
      );
      console.log('really here');
      console.log(isVideoEvaluation);
      if (isVideoEvaluation) {
        console.log('in the good condition');
        console.log(res.data);
        let update = await axios({
          method: 'put',
          url: `http://192.168.50.74:5000/api/evaluations/${res.data.id}`,
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
          data: isVideoEvaluation,
        });
        // clear()
        // close()
        console.log(update);
      }
      clear();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Text style={styles.infoText}></Text>
      <TextInput
        style={styles.infoDescription}
        placeholder="Push to describ" 
        placeholderTextColor="#fff" 
        onChangeText={value => setDescription(value)} />
      <View style={styles.container}>

        
        {selectedGroup === null &&
          ['Technique', 'Psychologique', 'Stratégique', 'Physique'].map(
            groupTitle => {
              return (
                <Button
                  key={groupTitle}
                  title={groupTitle}
                  onPress={() => setSelectedGroup(groupTitle)}
                ></Button>
              );
            },
          )}
     
        {selectedGroup && (
          <>
            <Text style={styles.modalText}>{selectedGroup}</Text>

            <FlatList
              data={listCriteria.filter(
                criterion => criterion.groupe === selectedGroup,
              )}
              keyExtractor={criterion => {
                return criterion.id.toString();
              }}
              renderItem={({ item }) => {
                return (
                  <>
                    <Button
                      onPress={() => setSelectedCriterion(item.id)}
                      title={item.name}
                    >
                      <Text style={styles.modalText}>{item.name}</Text>
                    </Button>
                  </>
                );
              }}
            ></FlatList>
            {!selectedCriterion && (
              <Button title="cancel" onPress={() => clear()}></Button>
            )}
          </>
        )}
        {selectedCriterion && (
          <>
            <Button
              title="+"
              style={styles.modalCrement}
              onPress={() => incrementScore()}
            />
             <Text style={styles.modalText}>{score}</Text>
             <Button
              title="-"
              style={styles.modalCrement}
              onPress={() => decrementScore()}
            />
            <Button title="cancel" onPress={() => clear()}></Button>
            <Button title="submit" onPress={() => postEvaluation()}></Button>
          </>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnCriteria: {
    color: 'white',
    backgroundColor: 'red',
    height: 25,
    width: 50,
  },
  btnCriteriaContainer: {
    display: 'flex',
    justifyContent: 'center',
    height: 100,
    width: 300,
    backgroundColor: 'red',
  },

  btnInfoCriteria: {
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 'auto',
    paddingBottom: 90,
    marginLeft: 'auto',
    height: '40%',
  },
  description: {
    width: '100%',
  },
  infoDescription: {
    color: 'white',
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 30,
    alignItems: "flex-end",
    width: "100%",
  },
  infoText: {
    color: 'white',
    fontSize: 15,
  },
  modal: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
  },
  modalContainer: {
    display: 'flex',
    // flexDirection: "column",
    alignItems: 'center',
    backgroundColor: 'red',
  },
  modalCrement: {
    height: 35,
    fontSize: 20,
    color: 'white',
  },
  modalDescritpion: {
    display: 'flex',
    height: 500,
    marginLeft: '0%',
    width: '100%',
  },
  modalScoreContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  modalInfo: {
    backgroundColor: 'black',
    alignItems: 'center',
  },
  modalText: {
    color: 'white',
    fontSize: 45,
  },
  sousTitreContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  sousTitre: {
    color: 'white',
    fontSize: 25,
  },
  textCriteria: {
    color: 'white',
    fontSize: 18,
  },
  titre: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
  },
});

export default Evaluate;
