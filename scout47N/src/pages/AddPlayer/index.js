import React, { useState } from 'react';
import { Button, StyleSheet, View, Text, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';
import * as Yup from 'yup';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { AppForm, AppFormField, SubmitButton } from './../../components/forms';

import { Container, Title, Content, Header } from './styles';
// import Text from "../components/Text";
// import Screen from "../components/Screen";
// import routes from "../navigation/routes";
import { set } from 'react-native-reanimated';

// Define the schema of the form, outside of the component,
// to avoid the redefine it at each re-render
const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .required()
    .label('Firstname'),
  lastname: Yup.string()
    .required()
    .label('Lastname'),
  club: Yup.string()
    .notRequired()
    .label('Club'),
  birthdate: Yup.date()
    .notRequired()
    .label('Date'),
  picture: Yup.string()
    .required()
    .label('picture'),
});

function AddPlayerScreen({ navigation }) {
  const [isPosted, setIsPosted] = useState(false);

  const postPlayer = async values => {
    const token = await AsyncStorage.getItem('token');
    console.log('values', values);
    let url = 'http://192.168.50.74:5000/api/players';
    if (isPosted == false) {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token == null) {
          throw new Error('Not logged in');
        }
        const response = await axios.post(url, values, {
          headers: { Authorization: `Bearer ${JSON.parse(token)}` },
        });
        setIsPosted(true);
        navigation.navigate('Players');
      } catch (error) {
        console.log('error ', error);
      }
    }

    // if (isPosted == false) {
    //   axios
    //     .post("http://192.168.50.74:5000/api/players", values)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    //   setIsPosted(true);
    //   navigation.navigate(routes.PLAYERSLISTSCREEN);
    // } else {
    //   console.log("already uploaded");
    // }
  };

  return (
    <Container>
      <Header>
        {/* <AntDesign
        style={{ position: 'absolute', left: 10, top: 10 }}
        name="adduser"
        size={24}
        color="black"
      /> */}
        <Title>Nouveau joueur</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <FontAwesome
          style={{ position: 'absolute', right: 13, top: 12 }}
          name="ellipsis-v"
          size={24}
          color="black"
        />
      </Header>
      <ScrollView>
        <Content style={styles.container}>
          <Text style={styles.titre}>Ajouter les informations</Text>
          <AppForm
            initialValues={{
              firstname: '',
              lastname: '',
              birthdate: '',
              height: '',
              weight: '',
              position: '',
              strongFoot: '',
              club: '',
              picture:
                'https://cdn.pixabay.com/photo/2014/02/10/22/24/soccer-263716_960_720.jpg',
            }}
            onSubmit={values => postPlayer(values)}
            validationSchema={validationSchema}
          >
            <>
              <AppFormField name="firstname" placeholder="Prénom" />
              <AppFormField name="lastname" placeholder="Nom de famille" />
              <AppFormField name="birthdate" placeholder="date AAAA-MM-JJ" />
              <AppFormField name="height" placeholder="taille (cm)" />
              <AppFormField name="weight" placeholder="poids (kg)" />
              <AppFormField name="position" placeholder="position" />
              <AppFormField name="strongFoot" placeholder="pied fort" />
              {/* <AppFormField name="club" placeholder="club" /> */}
              {/* <Button
            title="Nouveau club ?"
            onPress={() => navigation.navigate(routes.ADDCLUBSCREEN)}
          /> */}
              <SubmitButton title="Submit" />
            </>
          </AppForm>
        </Content>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(91, 87, 115)',
    height: 1000,
  },
  text: {
    color: 'white',
  },
  titre: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default AddPlayerScreen;
